"use strict";

let numberOfFilms;

function start() {
     numberOfFilms = +prompt("How many movies have you already watched?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you already watched?", "");
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function personalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
        console.log('quite a few films');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('classic viewer');
    }else if (personalMovieDB.count > 30) {
        console.log('you are a film buff');
    }else {
        console.log('error');
    }
}

personalLevel();


function repeatQuestions() {
    for (let i = 0; i < 2; i++) {

        const questions = prompt("One of the last movies I watched", ""),
              rate = prompt("Rate it", "");
        if (questions == null || questions.length > 6 || questions == '' || rate == null || rate == '') {
           i--;
        }else {
            personalMovieDB.movies[questions] =  rate;
        }
    }    
}

repeatQuestions();

function writeYourGenres(num) {
    for(let i = 0; i < num; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i+1}`, "");
    }
}

writeYourGenres(3);


function showMyDB(hidden) {
    if(!hidden) {
        console.log(JSON.stringify(personalMovieDB, null, 4));
    }
}

showMyDB(personalMovieDB.privat);


// const firstQ = prompt("One of the last movies I watched", "");
//  personalMovieDB.movies[firstQ] =  prompt("Rate it", "");

//  const secondQ = prompt("One of the last movies I watched", ""); 
//  personalMovieDB.movies[secondQ] =  prompt("Rate it", "");

// console.log(JSON.stringify(personalMovieDB, null, 4));