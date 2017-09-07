let movies_list = "movies.json";
let template = document.querySelector(".movie_item").content;
let main = document.querySelector("main");

function getData(link) {
    fetch(link).then(function (response) {
        return response.json();
    }).then(function (json) {
        return show(json);
    });
}

function show(json) {
    json.forEach(function (movie) {
        console.log(movie.name);
        let clone = template.cloneNode(true);
        clone.querySelector('.name').textContent = movie.name;
        clone.querySelector('.length').textContent = "Length: " + movie.length;
        clone.querySelector('.genre').textContent = "Genre: " + movie.genre;
        clone.querySelector('.director').textContent = "Director: " + movie.director;
        clone.querySelector('.stars').textContent = "Stars: " + movie.stars;
        clone.querySelector('.description').textContent = "Description: " + movie.description;

        main.appendChild(clone);
    });



}

getData(movies_list);
