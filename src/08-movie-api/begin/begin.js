const IMDB_API = {
  URL: "https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars"
}
const posterContainer = document.getElementById('poster-container')

getPoster();

async function getPoster(){
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a",
      'x-rapidapi-host': "imdb8.p.rapidapi.com"
    }
  };
  
  fetch(IMDB_API.URL, options)
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      buildPoster(response.results);
    })
    .catch(err => console.error(err));
}
function buildPoster(response){
  console.log(response[0].image.url);
  for(let i = 0; i < 5; i++){
    let tempDiv = document.createElement('div');
    tempDiv.classList = 'moviePoster';
    tempDiv.innerHTML = `
    <img class='poster' src='${response[i].image.url}' alt="Movie Poster" class="poster">
    <div class="movieData">
      <p class="titleYear">${response[i].title} - ${response[i].year}</p>
    </div>`;
    posterContainer.appendChild(tempDiv);
  }
}