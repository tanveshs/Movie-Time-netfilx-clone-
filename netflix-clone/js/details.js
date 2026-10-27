/**
 * MOVIETIME - Details Page Logic
 */

document.addEventListener("DOMContentLoaded", function() {
    setupNavbarAuth();
    
    // Parse ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    if (!movieId) {
        showError();
        return;
    }
    
    const movie = getMovieById(movieId);
    
    if (!movie) {
        showError();
        return;
    }
    
    // Populate Data
    document.getElementById('detail-bg').src = movie.backdrop;
    document.getElementById('detail-poster').src = movie.poster;
    document.title = `${movie.title} - MovieTime`;
    document.getElementById('detail-title').textContent = movie.title;
    document.getElementById('detail-rating').textContent = `⭐ ${movie.rating}`;
    document.getElementById('detail-year').textContent = movie.year;
    document.getElementById('detail-duration').textContent = movie.duration;
    document.getElementById('detail-type').textContent = movie.type;
    
    document.getElementById('detail-desc').textContent = movie.description;
    
    // Arrays joined by commas
    document.getElementById('detail-cast').textContent = movie.cast.join(', ');
    document.getElementById('detail-director').textContent = movie.director;
    document.getElementById('detail-genres').textContent = movie.genre.join(', ');
    
    // Setup Action Buttons
    const watchBtn = document.getElementById('btn-watch');
    watchBtn.href = `watch.html?id=${movie.id}`;
    
    const myListBtn = document.getElementById('btn-mylist');
    updateMyListBtn(myListBtn, movie.id);
    
    myListBtn.addEventListener('click', () => {
        const isAdded = toggleMyList(movie.id);
        updateMyListBtn(myListBtn, movie.id);
    });
});

function updateMyListBtn(btn, movieId) {
    if (isInMyList(movieId)) {
        btn.innerHTML = `<span>✓</span> In My List`;
        btn.style.backgroundColor = 'rgba(255,255,255,0.1)';
    } else {
        btn.innerHTML = `<span>+</span> My List`;
        btn.style.backgroundColor = 'rgba(109, 109, 110, 0.7)';
    }
}

function showError() {
    document.getElementById('details-container').style.display = 'none';
    document.getElementById('details-error').style.display = 'block';
}
