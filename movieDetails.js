function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title'),
        genre: params.get('genre'),
        rating: parseFloat(params.get('rating')),
        director: params.get('director'),
        year: params.get('year'),
        description: params.get('description'),
        image: params.get('image')
    };
}

function displayMovieDetails() {
    const movie = getQueryParams();
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-rating').textContent = movie.rating.toFixed(1);
    document.getElementById('movie-director').textContent = movie.director;
    document.getElementById('movie-year').textContent = movie.year;
    document.getElementById('movie-description').textContent = movie.description;
    document.getElementById('movie-image').src = movie.image;

    displayRecommendedMovies(movie.genre, movie.rating);
}

function displayRecommendedMovies(genre, rating) {
    const recommendedMovies = movies.filter(movie =>
        movie.genre === genre &&
        movie.rating >= rating - 1 &&
        movie.rating <= rating + 1 &&
        movie.title !== getQueryParams().title
    );
    const recommendedMovieList = document.getElementById('recommended-movie-list');
    recommendedMovieList.innerHTML = '';

    if (recommendedMovies.length === 0) {
        recommendedMovieList.innerHTML = '<p>No recommendations available for this genre.</p>';
        return;
    }

    recommendedMovies.forEach(function(movie) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-card');
        movieElement.innerHTML = `
            <div class="movie-card-content">
                <img src="${movie.image}" alt="${movie.title}" style="max-width: 100%; height: auto;" />
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating.toFixed(1)}</p>
            </div>
        `;
        movieElement.addEventListener('click', function () {
            openMoviePage(movie);
        });
        recommendedMovieList.appendChild(movieElement);
    });
}

function openMoviePage(movie) {
    const moviePageURL = `moviePage.html?title=${encodeURIComponent(movie.title)}` +
                         `&genre=${encodeURIComponent(movie.genre)}` +
                         `&rating=${encodeURIComponent(movie.rating)}` +
                         `&director=${encodeURIComponent(movie.director)}` +
                         `&year=${encodeURIComponent(movie.year)}` +
                         `&description=${encodeURIComponent(movie.description)}` +
                         `&image=${encodeURIComponent(movie.image)}`;
    window.location.href = moviePageURL;
}

document.addEventListener('DOMContentLoaded', displayMovieDetails);
