"use strict";

const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const firstQ = prompt("One of the last movies I watched", "");
 personalMovieDB.movies[firstQ] =  prompt("Rate it", "");

 const secondQ = prompt("One of the last movies I watched", ""); 
 personalMovieDB.movies[secondQ] =  prompt("Rate it", "");

console.log(JSON.stringify(personalMovieDB, null, 4));