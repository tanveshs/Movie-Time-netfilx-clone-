/**
 * MOVIETIME - My List Management
 * Uses localStorage to save user's favorite content.
 */

// Get the user's list from localStorage
function getMyList() {
    const list = localStorage.getItem('movieTime_myList');
    return list ? JSON.parse(list) : [];
}

// Check if a movie is in the list
function isInMyList(movieId) {
    const list = getMyList();
    return list.includes(parseInt(movieId));
}

// Add a movie to the list
function addToMyList(movieId) {
    let list = getMyList();
    movieId = parseInt(movieId);
    
    if (!list.includes(movieId)) {
        list.push(movieId);
        localStorage.setItem('movieTime_myList', JSON.stringify(list));
        return true; // Added
    }
    return false; // Already in list
}

// Remove a movie from the list
function removeFromMyList(movieId) {
    let list = getMyList();
    movieId = parseInt(movieId);
    
    list = list.filter(id => id !== movieId);
    localStorage.setItem('movieTime_myList', JSON.stringify(list));
}

// Toggle movie in list (adds if not present, removes if present)
function toggleMyList(movieId) {
    if (isInMyList(movieId)) {
        removeFromMyList(movieId);
        return false; // Result is removed
    } else {
        addToMyList(movieId);
        return true; // Result is added
    }
}

// Get full movie objects for the list
function getMyListMovies() {
    const listIds = getMyList();
    if (typeof MOVIE_DATA === 'undefined') return [];
    
    return listIds.map(id => getMovieById(id)).filter(m => m !== null);
}
