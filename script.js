const myApi       = '3828cc5e00cec39e28da8767cddbf72c';
const baseTopRated = "https://api.themoviedb.org/3/movie/top_rated";
const baseUpcoming  =  "https://api.themoviedb.org/3/movie/upcoming";
const baseTrend   = 'https://api.themoviedb.org/3/trending/movie/week';
const language    = '?language=en-US';

//click movies(details movies)
const baseDetailsMovie = "https://api.themoviedb.org/3/movie/";



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
    console.log(movieImg);
    movieImg.forEach(function(element){
        element.addEventListener("click", async()=>{
            const id = element.id;
            const request = baseDetailsMovie+id+"?api_key="+myApi+"&"+language;
            const req = await fetch(request);
            const data = await req.json();
            clickMovies(data);
        });
   })
}


const currentMovies = document.querySelector(".currentMovies");
const clickMovie = document.querySelector(".clickMovies");
function clickMovies(data) {
    console.log(data);
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
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="card-img-top" alt="">
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

                <div class="row mt-5 align-items-center">
                    <div class="col-md-2">
                        <p class="spoken_languages">Spoken Languages:</p>
                    </div> 
                    <div class="col-md-10">
                        <p class="lang">${languages}</p>
                    </div> 
                </div>

                <div class="row  align-items-center">
                    <div class="col-md-2">
                        <p class="production_companies">Production Companies:</p>
                    </div> 
                    <div class="col-md-10">
                        <p class="company">${company}</p>
                    </div> 
                </div>
            </div>
        </div>
     `;
     clickMovie.innerHTML = movie;
}



const trend = document.querySelector(".trend");
function trendingMovies(results) {
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-md-2">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}"  id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1">
                    <p class="text-center text-white" style="height:40px;">${results[i].original_title}</p>
                    <div class="d-flex justify-content-between">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge bg-secondary p-2">${results[i].release_date}</p>
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
        <div class="col-md-2">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1">
                    <p class="text-center text-white" style="height:40px;">${results[i].original_title}</p>
                    <div class="d-flex justify-content-between">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge bg-secondary p-2">${results[i].release_date}</p>
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
        <div class="col-md-2">
            <div class="card kart">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" id="${results[i].id}" alt="" class="card-img-top rounded-3 movies">
                <div class="card-body p-1">
                    <p class="text-center text-white" style="height:40px;">${results[i].original_title}</p>
                    <div class="d-flex justify-content-between">
                        <div class="vote_average">
                            <i class="fa-solid fa-star text-warning"></i>
                            <span class="text-white">${results[i].vote_average.toFixed(1)}</span>
                        </div>
                        <p class="year badge bg-secondary p-2">${results[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>      
        `;
        upcoming.insertAdjacentHTML("beforeend",card);
    }  
}


