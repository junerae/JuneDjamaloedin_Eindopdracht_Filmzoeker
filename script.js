const titles = movies.map(item => item.Title)

let listOfMovies = document.getElementById('movieList')

let filmsDisplay = function (e) {
    for (i = 0; i < e.length; i++) {
        let newLi = document.createElement("li")
        newLi.classList.add("single-movie")
        newLi.innerHTML = "<a href='https://www.imdb.com/title/" + (e[i].imdbID) + "/'target='_blank'><img src=" + JSON.stringify(e[i].Poster) + "></a><br>"
            + JSON.stringify(e[i].Title) + "<br><br>"
        let moviesOverview = document.getElementById("movieList")
        moviesOverview.appendChild(newLi)
    }
}
filmsDisplay(movies)

function filterMovies(searchWord) {
    listOfMovies.innerHTML = '';
    let result = movies.filter(item => {
        if (item.Title.includes(searchWord)) {
            return item
        }
    })
    filmsDisplay(result);
}

const radioBtns = document.getElementById('btn-container')
const selectedBtn = radioBtns.addEventListener('change', function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case 'nieuw':
            console.log('Toon alle nieuwste films');
            const nieuwsteFilms = movies.filter(movies => {
                return movies.Year >= 2014;
            });
            listOfMovies.innerHTML = '';
            filmsDisplay(nieuwsteFilms)
            break;
        case 'avengers':
            console.log('Toon alle avengers films');
            filterMovies("Avengers")
            break;
        case 'xmen':
            console.log('toon alle xmen films');
            filterMovies("X-Men")
            break;
        case 'princess':
            console.log('toon alle princess films');
            filterMovies("Princess")
            break;
        case 'batman':
            console.log('toon alle batman films');
            filterMovies("Batman")
            break;
        case 'all':
            console.log('toon alle films');
            listOfMovies.innerHTML = '';
            filmsDisplay(movies)
            break;
    }
})