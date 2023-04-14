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
      const { results } = response;
      let truncatedResults = [];
      for(let i = 0; i < 5; i++){
        let movie = {
          title: results[i].title,
          year: results[i].year,
          url: results[i].image.url
        }
        truncatedResults.push(movie);
      };
      buildPoster(truncatedResults);
    })
    .catch(err => console.error(err));
}
function buildPoster(list){
  for(movie of list){
    let tempDiv = document.createElement('div');
    tempDiv.classList = 'moviePoster';
    tempDiv.innerHTML = `
    <img class='poster' src='${movie.url}' alt="${movie.title} " class="poster">
    <div class="movieData">
      <p class="titleYear">${movie.title} - ${movie.year}</p>
    </div>`;
    posterContainer.appendChild(tempDiv);
  }
}