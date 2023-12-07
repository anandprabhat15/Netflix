// API key from tmdb
const api = "api_key=bf5d22d0f289a7be22e567ecb721d700";
// Base URL of the site
const base_url = "https://api.themoviedb.org/3";
// Banner URL
const banner_url = "https://image.tmdb.org/t/p/original";
// Image URL
const img_url = "https://image.tmdb.org/t/p/w185";

// Requests for movies data
const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// Truncate function to shorten the movie description
function truncate(str, n) {
  // If the string is bigger than n characters, the string will be shortened and ended with ....
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Banner


fetch(requests.fetchNetflixOriginals)
  .then((res) => res.json())
  .then((data) => {
    // The movie recommendations will change on every refresh
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner__title = document.getElementById("banner_title");
    var banner__desc = document.getElementById("banner_discription");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner__title.innerText = setMovie.name;
  });

// Movies rows


fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");
   const row=document.createElement("div");
 
   row.className="row";
   row.classList.add("netflixshow");

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="NETFLIX ORIGINALS";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);

   //loop for fetching movies
   data.results.forEach((movie)=>{
      const poster=document.createElement("img");
      poster.className="row_posterLarge";

      var s=movie.name.replace(/\s+/g, "");
      poster.id=s;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});


//trending


fetch(requests.fetchTrending)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="Trending";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);
 
   //loop for fetching movies
   data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row_posterLarge";
      var s2=movie.id;

      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});


//Actions


fetch(requests.fetchActionMovies)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");

   const row=document.createElement("div");

   row.className="row";

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="Action";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);
 
   //loop for fetching movies
   data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row_posterLarge";
      var s2=movie.id;

      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});


//Horror


fetch(requests.fetchHorrorMovies)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="Horror";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);
 
   //loop for fetching movies
   data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row_posterLarge";
      var s2=movie.id;

      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});

//Romance


fetch(requests.fetchRomanceMovies)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="Romance";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);
 
   //loop for fetching movies
   data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row_posterLarge";
      var s2=movie.id;

      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});

//Documentary


fetch(requests.fetchDocumentaries)
.then((res)=>res.json())

.then((data)=>{
   const headrow=document.getElementById("headrow");
   const row=document.createElement("div");

   row.className="row";

   headrow.appendChild(row);

   const title=document.createElement("h2");

   title.className="row_title";
   title.innerText="Documentary";

   row.appendChild(title);

   const row_posters=document.createElement("div");
   row_posters.className="row_posters";
   row.appendChild(row_posters);
 
   //loop for fetching movies
   data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row_posterLarge";
      var s2=movie.id;

      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
   });
});

// <!-- CREATED BY ANAND PRABHAT -->
