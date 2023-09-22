"use strict";

const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
    console.log('quite a few films');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('classic viewer');
}else if (personalMovieDB.count > 30) {
    console.log('you are a film buff');
}else {
    console.log('error');
}


// for (let i = 0; i < 2; i++) {

//     const questions = prompt("One of the last movies I watched", ""),
//           rate = prompt("Rate it", "");
//     if (questions == null || questions.length > 6 || questions == '' || rate == null || rate == '') {
//        i--;
//     }else {
//         personalMovieDB.movies[questions] =  rate;
//     }

// }

// const firstQ = prompt("One of the last movies I watched", "");
//  personalMovieDB.movies[firstQ] =  prompt("Rate it", "");

//  const secondQ = prompt("One of the last movies I watched", ""); 
//  personalMovieDB.movies[secondQ] =  prompt("Rate it", "");

console.log(JSON.stringify(personalMovieDB, null, 4));