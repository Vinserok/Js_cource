
const nomberOfFilms = +prompt("Сколько фильмов ві уже посмотрели", "");

const personalMovieDB = {
    count: nomberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("Один из просмотренных фильмов", ""),
      b = prompt("на сколько оцение", ""),
      c = prompt("Один из просмотренных фильмов", ""),
      d = prompt("на сколько оцение", "");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);