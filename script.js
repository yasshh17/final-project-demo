const searchInput = document.getElementById("movie-search");
const searchButton = document.getElementById("search-btn");
const movieDisplay = document.getElementById("movie-display");



async function displayMovieDetails(data) {
  if (data) {
    
    const movieTitle = data.titleResults.results[0].titleNameText
    const posterPath = data.titleResults.results[0].titlePosterImageModel.url
    const movieOverview = data.titleResults.results[0].titlePosterImageModel.caption
    const id = data.titleResults.results[0].id





    movieDisplay.innerHTML = `
      <h2>${movieTitle}</h2>
      <img class="movie-poster" src="${posterPath}" alt="${movieTitle} ">
      <p>${movieOverview}</p>  
    `;
  } else {
    displayError("Movie not found");
  }
}


async function searchMovie() {
  const searchTerm = searchInput.value;
  console.log("search movie", searchTerm);
  const url = `https://imdb146.p.rapidapi.com/v1/find/?query="${searchTerm}"`;


console.log(url);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ba8499abbmsh7e0267a614754cbp11ba22jsnc900966289a1',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}

};


try {
	const response = await fetch(url, options);
	const result = await response.json();
    displayMovieDetails(result);
    console.log(id)
	
} catch (error) {
	console.error(error);
}
//   if (searchTerm) {
//     movieDisplay.innerHTML = "<p>Loading...</p>"; 

//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => displayMovieDetails(data))
//       .catch(error => displayError(error));
//   } else {
//     movieDisplay.innerHTML = "<p>Please enter a search term</p>";
//   }
}

searchButton.addEventListener("click", searchMovie);



// function displayError(message) {
//   movieDisplay.innerHTML = `<p>Error: ${message}</p>`;
// }
