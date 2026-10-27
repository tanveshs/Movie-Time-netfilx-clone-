/**
 * MOVIETIME - Browse Page Logic
 */

document.addEventListener("DOMContentLoaded", function() {
    setupNavbarAuth();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Handle search redirect
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Initialize content
    initBrowseContent();
});

function initBrowseContent() {
    // 1. Setup Hero (Random featured movie/series)
    const featured = MOVIE_DATA[Math.floor(Math.random() * MOVIE_DATA.length)];
    document.getElementById('hero-bg').src = featured.backdrop;
    document.getElementById('hero-title').textContent = featured.title;
    document.getElementById('hero-desc').textContent = featured.description;
    document.getElementById('hero-play').href = `watch.html?id=${featured.id}`;
    document.getElementById('hero-info').href = `details.html?id=${featured.id}`;

    // 2. Render Rows
    const mainContent = document.getElementById('main-content');
    
    // Continue Watching Row
    const continueWatching = getContinueWatching();
    if (continueWatching.length > 0) {
        mainContent.appendChild(createRow('Continue Watching', continueWatching, true));
    }

    // My List Row
    const myList = getMyListMovies();
    if (myList.length > 0) {
        mainContent.appendChild(createRow('My List', myList));
    }

    // Trending Now (Random sort for demo)
    const trending = [...MOVIE_DATA].sort(() => 0.5 - Math.random()).slice(0, 8);
    mainContent.appendChild(createRow('Trending Now', trending));

    // Category Rows
    const series = getMoviesByType('Series');
    if (series.length > 0) mainContent.appendChild(createRow('Popular Series', series));

    const movies = getMoviesByType('Movie');
    if (movies.length > 0) mainContent.appendChild(createRow('Popular Movies', movies));

    const anime = getMoviesByType('Anime');
    if (anime.length > 0) mainContent.appendChild(createRow('Anime', anime));
}

function createRow(title, movies, isProgress = false) {
    const row = document.createElement('div');
    row.className = 'slider-row';

    const titleEl = document.createElement('h2');
    titleEl.className = 'slider-row__title';
    titleEl.textContent = title;
    row.appendChild(titleEl);

    const container = document.createElement('div');
    container.className = 'slider-row__container';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = `movie-card ${isProgress ? 'movie-card--progress' : ''}`;
        card.onclick = () => {
            window.location.href = `details.html?id=${movie.id}`;
        };

        let cardInner = `
            <img src="${movie.backdrop}" alt="${movie.title}" loading="lazy">
            <div class="movie-card__info">
                <div class="movie-card__title">${movie.title}</div>
                <div class="movie-card__meta">
                    <span>${movie.year}</span>
                    <span>⭐ ${movie.rating}</span>
                </div>
            </div>
        `;

        if (isProgress && movie.progressPercentage) {
            cardInner += `
                <div class="progress-bar">
                    <div class="progress-bar__fill" style="width: ${movie.progressPercentage}%"></div>
                </div>
            `;
        }

        card.innerHTML = cardInner;
        container.appendChild(card);
    });

    row.appendChild(container);
    return row;
}
