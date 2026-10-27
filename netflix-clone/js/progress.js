/**
 * MOVIETIME - Watch Progress Management
 * Uses localStorage to save user's watch history and progress.
 */

// Get all watch progress
function getWatchProgress() {
    const progress = localStorage.getItem('movieTime_progress');
    return progress ? JSON.parse(progress) : {};
}

// Save progress for a specific movie/episode
function saveProgress(movieId, percentage) {
    const progress = getWatchProgress();
    
    // Ensure percentage is between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    
    progress[movieId] = {
        percentage: percentage,
        timestamp: new Date().getTime()
    };
    
    localStorage.setItem('movieTime_progress', JSON.stringify(progress));
}

// Get progress for a specific movie (returns percentage 0-100, or 0 if not started)
function getProgress(movieId) {
    const progress = getWatchProgress();
    return progress[movieId] ? progress[movieId].percentage : 0;
}

// Get recently watched movies sorted by timestamp
function getContinueWatching() {
    const progress = getWatchProgress();
    if (typeof MOVIE_DATA === 'undefined') return [];
    
    // Convert object to array and sort by most recent timestamp
    const recentlyWatched = Object.keys(progress)
        .map(id => ({
            id: parseInt(id),
            percentage: progress[id].percentage,
            timestamp: progress[id].timestamp
        }))
        .filter(item => item.percentage > 0 && item.percentage < 95) // Don't show finished things (e.g. >95%)
        .sort((a, b) => b.timestamp - a.timestamp);
        
    // Map to movie objects with added progress property
    return recentlyWatched.map(item => {
        const movie = getMovieById(item.id);
        if (movie) {
            return { ...movie, progressPercentage: item.percentage };
        }
        return null;
    }).filter(m => m !== null);
}
