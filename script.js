
const searchTerm = document.querySelector("#blank")

async function getRecipe(event) {
  
  try {
     
    let response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s'${searchTerm}`")
    
    console.log(response);
  
  }catch (err) {
    console.log(" Not found");
}
}



/*
https://www.themealdb.com/api/json/v1/1/search.php?s=
https://www.themealdb.com/api/json/v1/1/lookup.php?i=
const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = "21a0d70a"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&s=`;

const movieSearch = document.querySelector("#blank")
const searchButton = document.querySelector("#search")
const displayTitle = document.querySelector(".movie-list")
searchButton.addEventListener("click", getMovies)



async function getMovies(event) { 
  
  try {
    let response = await axios.get(BASE_URL+movieSearch.value);
    //let response = await axios.get(BASE_URL+movieSearch.value)
    //let movies = response
    renderList(response.data.Search)
    
    console.log(response.data)
     //let movieData = response.data[0].title
     
  } catch (err) {
      console.log(err);
  }
  

}


function renderList(movies) {
  removeMovies()
  movies.forEach(element => {

    console.log(element.Title)
    const movieHeader = document.createElement("h1")
    const movieYearheader = document.createElement("h2");
    const movieCard = document.createElement("div")
    const title = document.createElement("h2")
    const year = document.createElement('h2')
    const movieImage = document.createElement("img")
    year.innerText = element.Year;
    movieImage.src = element.Poster;
    title.classList.add("title-class");
    movieCard.classList.add('movie-card-class');
    title.innerText = element.Title;
    movieHeader.innerText = "Movie Name"
    movieYearheader.innerText = "Year"
    movieCard.appendChild(movieHeader);
    movieCard.appendChild(title);
    movieCard.appendChild(movieYearheader);
    movieCard.appendChild(year);
    movieCard.appendChild(movieImage);
    displayTitle.appendChild(movieCard)
  
    
  });
 
  
  function removeMovies() {
    
    const movieCards = document.querySelectorAll('.movie-card-class')
  
    
    movieCards.forEach(card =>card.remove());
      

  }
}

*/