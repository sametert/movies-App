const myApi       = '3828cc5e00cec39e28da8767cddbf72c';
const baseTopRated = "https://api.themoviedb.org/3/movie/top_rated";
const baseUpcoming  =  "https://api.themoviedb.org/3/movie/upcoming";
const baseTrend   = 'https://api.themoviedb.org/3/trending/movie/week';
const language    = '?language=en-US';


//weekly trending movies
displayTrendingMovies();
async function displayTrendingMovies() {
    const request = baseTrend+"?api_key="+myApi+"&"+language;
    const req = await fetch(request);
    const data = await req.json();
    trendingMovies(data.results); 
}


const trend = document.querySelector(".trend");
function trendingMovies(results) {
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-md-2">
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" alt="" class="card-img-top rounded-3">
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


//top rated movies
displayTopRatedMovies();
async function displayTopRatedMovies() {
    const request = baseTopRated+"?api_key="+myApi+"&"+language;
    const req = await fetch(request);
    const data = await req.json();
    topRatedMovies(data.results);
}


const topRated = document.querySelector(".top_rated");
function topRatedMovies(results){
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-md-2">
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" alt="" class="card-img-top rounded-3">
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



//upcoming movies
displayUpComingMovies();
async function displayUpComingMovies() {
    const request = baseUpcoming+"?api_key="+myApi+"&"+language;
    const req = await fetch(request);
    const data = await req.json();
    upComingMovies(data.results);
}


const upcoming = document.querySelector(".upcoming");
function upComingMovies(results){
    for(let i = 0 ; i < 6; i++) {
        const card = `
        <div class="col-md-2">
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${results[i].poster_path}" alt="" class="card-img-top rounded-3">
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


