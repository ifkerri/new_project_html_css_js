/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    const film = prompt('Один из последних просмотренный фильмов');
    const score = prompt('На сколько оцените его?');

    if (film != null && score != null && film.trim() != '' && score.trim() != '' && film.trim().length < 50) {
        personalMovieDB.movies[film] = score;
    } else {
        i--;
    }

}

console.log(personalMovieDB);