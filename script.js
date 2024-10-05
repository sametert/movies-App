const myApi         = '3828cc5e00cec39e28da8767cddbf72c';
const baseTopRated  = "https://api.themoviedb.org/3/movie/top_rated";
const baseUpcoming  =  "https://api.themoviedb.org/3/movie/upcoming";
const baseTrend     = 'https://api.themoviedb.org/3/trending/movie/week';
const language      = '?language=en-US';

//click movies(details movies)
const baseDetailsMovie = "https://api.themoviedb.org/3/movie/";

//search movies
const baseSearchMovies = "https://api.themoviedb.org/3/search/movie";



allMovies();
async function allMovies() {
    //weekly trending movies
    const request = baseTrend+"?api_key="+myApi+"&"+language;
    const req = await fetch(request);
    const data = await req.json();
    trendingMovies(data.results); 


    //top rated movies
    const istek = baseTopRated+"?api_key="+myApi+"&"+language;
    const fetchReq = await fetch(istek);
    const veri = await fetchReq.json();
    topRatedMovies(veri.results);


    //upcoming movies
    const requ = baseUpcoming+"?api_key="+myApi+"&"+language;
    const response  = await fetch(requ);
    const result = await response.json();
    upComingMovies(result.results);
   

    const movieImg = document.querySelectorAll(".movies");
    movieImg.forEach(function(element){
        element.addEventListener("click", async()=>{
            const id = element.id;
            const request = baseDetailsMovie+id+"?api_key="+myApi+"&"+language;
            const req = await fetch(request);
            const data = await req.json();
            clickMovies(data);
            currentMovies.classList.add("add");
        });
   })
}


const currentMovies = document.querySelector(".currentMovies");
const clickMovie = document.querySelector(".clickMovies");
function clickMovies(data) {
    currentMovies.style.display = "none";

    let genres = "";
    for(let genre of data.genres) {
        genres+= genre.name+",";
    }

    let languages = "";
    for(let lang of data.spoken_languages) {
        languages += lang.english_name+","; 
    }

    let company = "";
    for(let cmp of data.production_companies) {
        company += cmp.name+",";
    }

    const movie = `
        <div class="col-md-4">
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" style="cursor:pointer;" class="card-img-top">
            </div>
        </div>
        <div class="col-md-8 text-white">
            <h1 class="movies-title">${data.original_title}</h1>
            <p class="tagline">${data.tagline}</p>
            <div class="row">
                <div class="col-md-4 d-flex justify-content-between movies_info">
                    <div class="vote_average me-2">
                        <i class="fa-solid fa-star text-warning"></i>
                        <span>${data.vote_average.toFixed(1)}</span>
                    </div>
                    <p class="me-2">${data.runtime}m</p>
                    <p class="me-2 badge bg-secondary p-2">${data.release_date}</p>
                </div>
                <p class="genre">${genres}</p>
                <p class="overview">${data.overview}</p>

                <div class="row click-details align-items-center">
                    <div class="col-md-2 ">
                        <p class="spoken_languages">Spoken Languages:</p>
                    </div> 
                    <div class="col-md-10 langu">
                        <p class="lang">${languages}</p>
                    </div> 
                </div>

                <div class="row align-items-center">
                    <div class="col-md-2">
                        <p class="production_companies">Production Companies:</p>
                    </div> 
                    <div class="col-md-10 langu">
                        <p class="company">${company}</p>
                    </div> 
                </div>
            </div>
        </div>
     `;
     clickMovie.innerHTML = movie;
}



const trend = document.querySelector(".trend");
console.log(trend)
function trendingMovies(results) {
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 trendingFilm ">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}"  id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1 details-body">
                    <div class="movie-name-kapsayici">
                        <p class="text-center movie-name">${results[i].original_title}</p>
                    </div>
                    <div class="d-flex justify-content-between film-details-all">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge p-2">${results[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>      
        `;
        trend.insertAdjacentHTML("beforeend",card);
    }  
}



const topRated = document.querySelector(".top_rated");
function topRatedMovies(results){
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1 details-body">
                    <div class="movie-name-kapsayici">
                        <p class="text-center movie-name">${results[i].original_title}</p>
                    </div>
                    <div class="d-flex justify-content-between film-details-all">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge  p-2">${results[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>      
        `;
        topRated.insertAdjacentHTML("beforeend",card);
    }  
}



const upcoming = document.querySelector(".upcoming");
function upComingMovies(results){
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1 details-body">
                    <div class="movie-name-kapsayici">
                        <p class="text-center movie-name">${results[i].original_title}</p>
                    </div>
                    <div class="d-flex justify-content-between film-details-all">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge p-2">${results[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>      
        `;
        upcoming.insertAdjacentHTML("beforeend",card);
    }  
}


const seacrhForm  = document.querySelector(".searchMovies");
const searchInput = document.querySelector(".search");
seacrhForm.addEventListener("submit", async(e)=> {
    if((search.classList.contains("add")) || currentMovies.classList.contains("add")) {
        clickMovie.innerHTML = "";
        e.preventDefault();
        currentMovies.style.display = "none";
        const inputValue = "query="+searchInput.value;
     
        const request = baseSearchMovies+"?api_key="+myApi+"&"+inputValue+"&"+language;
        const req     = await fetch(request);
        const data    = await req.json();
        searchMovies(data.results);
        search.classList.remove("add");
        currentMovies.classList.remove("add");
    } else if((search.classList.contains("srcMovies"))){
        e.preventDefault();
        currentMovies.style.display = "none";
        const inputValue = "query="+searchInput.value;
    
        const request = baseSearchMovies+"?api_key="+myApi+"&"+inputValue+"&"+language;
        const req     = await fetch(request);
        const data    = await req.json();
        searchMovies(data.results);
    }

   

    //click movie
    const movieImg = document.querySelectorAll(".movies");
    movieImg.forEach(function(element){
        element.addEventListener("click", async()=>{
            const id = element.id;
            const request = baseDetailsMovie+id+"?api_key="+myApi+"&"+language;
            const req = await fetch(request);
            const data = await req.json();
            clickMovies(data);
            // 1 tane search den gelen verileri clickledin
            search.classList.add("add");
            clickMovie.style.display = "";
            scrollToTop();
        });
   })
});


const row = document.querySelector(".searchFilms");
const search = document.querySelector(".srcMovies")
function searchMovies(results) {
    search.setAttribute("style","display:block;");
    clearDisplay();
    for(let result of results) {
        if( !(result.poster_path == null || result.vote_average == 0)) {
            const tag = `
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card kart">
                    <img src="https://image.tmdb.org/t/p/w500${result.poster_path}"  id="${result.id}" alt="" class="card-img-top rounded-3 movies">
                    <div class="card-body p-1 details-body">
                        <div class="movie-name-kapsayici">
                            <p class="text-center movie-name search-movie-name">${result.original_title}</p>
                        </div>
                        <div class="d-flex justify-content-between film-details-all">
                            <div class="vote_average">
                                <i class="fa-solid fa-star text-warning"></i>
                                <span class="text-white">${result.vote_average.toFixed(1)}</span>
                            </div>
                            <p class="year badge p-2">${result.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>    
            `;
            row.insertAdjacentHTML("beforeend",tag);
        }
    }
}


function clearDisplay() {
    row.innerHTML = "";
    searchInput.value = "";
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Animasyonlu bir şekilde kaydırma yapmak için 'smooth' değerini kullanabilirsiniz
    });
}



