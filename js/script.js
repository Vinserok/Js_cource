"use strict"

let nomberOfFilms;

function start() {
    nomberOfFilms = +prompt("Сколько фильмов ві уже посмотрели", "");

    while (nomberOfFilms == '' || nomberOfFilms == null || isNaN(nomberOfFilms)) {
        nomberOfFilms = +prompt("Сколько фильмов ві уже посмотрели", "");
    }
}

start();

const personalMovieDB = {
    count: nomberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false  
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из просмотренных фильмов", ""),
            b = prompt("на сколько оцение", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonlLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ві классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы - киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonlLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номеом ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();