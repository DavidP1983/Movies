"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (db) {
        let numberOfFilms;
        numberOfFilms = +prompt("How many movies have you already watched?", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many movies have you already watched?", "");
        }
        db.count = numberOfFilms;
    },
    personalLevel: function (db) {
        if (db.count >= 1 && db.count < 10) {
            console.log('quite a few films');
        } else if (db.count >= 10 && db.count <= 30) {
            console.log('classic viewer');
        } else if (db.count > 30) {
            console.log('you are a film buff');
        } else {
            console.log('error');
        }
    },
    repeatQuestions: function (db) {
        for (let i = 0; i < 2; i++) {

            const questions = prompt("One of the last movies I watched", ""),
                  rate = prompt("Rate it", "");
            if (questions == null || questions.length > 6 || questions == '' || rate == null || rate == '') {
                i--;
            } else {
                db.movies[questions.trim()] = rate;
            }
        }
    },
    writeYourGenres: function(num) {
        for(let i = 0; i < num; i++) {

            personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i+1}`, "");
            if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
                i--;
            }
        }
        // let genres = prompt(`Your favorite genre separated by commas`);
        // for (let i = 0; i < 2; i++) {
        //     if (genres == null || genres === '') {
        //         console.log('incorrect data');
        //     }else {
        //         personalMovieDB.genres = genres.split(', ');
        //     }
        // }

        personalMovieDB.genres.forEach((item,i) => {
            return console.log(`Favorite genre ${i+1} is ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(JSON.stringify(personalMovieDB, null, 4));
        }
    },
    toggleVisibleMyDB: function(visible) {
      visible ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};

personalMovieDB.start(personalMovieDB);
personalMovieDB.personalLevel(personalMovieDB);
personalMovieDB.repeatQuestions(personalMovieDB);
personalMovieDB.writeYourGenres(3);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);




// const firstQ = prompt("One of the last movies I watched", "");
//  personalMovieDB.movies[firstQ] =  prompt("Rate it", "");

//  const secondQ = prompt("One of the last movies I watched", "");
//  personalMovieDB.movies[secondQ] =  prompt("Rate it", "");

// console.log(JSON.stringify(personalMovieDB, null, 4));