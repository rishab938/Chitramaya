document.addEventListener('DOMContentLoaded', function() {
    displayMovies(movies);
});

function displayMovies(moviesArray) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    moviesArray.forEach(function(movie) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-card');
        movieElement.innerHTML = `
            <div class="movie-card-content">
                <img src=${movie.image}></img>
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            </div>
        `;
        movieElement.addEventListener('click', function() {
            openMoviePage(movie);
        });
        movieList.appendChild(movieElement);
    });
}

function getRecommendedMovies(currentMovie) {
    return movies.filter(movie => 
        movie.genre === currentMovie.genre && 
        Math.abs(movie.rating - currentMovie.rating) <= 1 && 
        movie.title !== currentMovie.title
    ).slice(0, 4);
}

function displayRecommendedMovies(currentMovie) {
    const recommendedMovies = getRecommendedMovies(currentMovie);
    const recommendedSection = document.getElementById('recommended-movies');
    recommendedSection.innerHTML = '<h2>Recommended Movies</h2>';
    const movieList = document.createElement('div');
    movieList.classList.add('recommended-list');
    recommendedMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <div class="movie-card-content">
                <img src=${movie.image}></img>
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            </div>
        `;
        movieCard.addEventListener('click', function() {
            openMoviePage(movie);
        });
        movieList.appendChild(movieCard);
    });
    recommendedSection.appendChild(movieList);
}

function openMoviePage(movie) {
    const moviePageURL = `moviePage.html?title=${encodeURIComponent(movie.title)}` +
    `&genre=${encodeURIComponent(movie.genre)}` +
    `&rating=${encodeURIComponent(movie.rating)}` +
    `&director=${encodeURIComponent(movie.director)}` +
    `&year=${encodeURIComponent(movie.year)}` +
    `&description=${encodeURIComponent(movie.description)}`;
    window.location.href = moviePageURL;
}

function filterMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;
    const filteredMovies = movies.filter(function(movie) {
        const matchesSearch = movie.title.toLowerCase().includes(searchInput);
        const matchesGenre = genreFilter === '' || movie.genre === genreFilter;
        const matchesRating = ratingFilter === '' || movie.rating >= parseFloat(ratingFilter);
        return matchesSearch && matchesGenre && matchesRating;
    });
    displayMovies(filteredMovies);
}
