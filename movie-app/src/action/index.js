// {
//     type:'ADD_MOVIES',
//     movies:[m1, m2, m3]
// }
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export default function addMovies(movies) {
    return{
        type: ADD_MOVIES,
        movies
    }
}
 
export function addFavourite(movie) {
    return{
        type:ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie) {
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function addMovieToList(movie) {
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch (movie) {
    const url = `https://omdbapi.com/?apikey=7251dae1&t=${movie}`;
    
    return function (dispatch) {
        fetch(url)
        .then (response => response.json())
        .then (movie => {
            console. log('movie', movie);
            // dispatch an action
            // dispatch({ type: 'ADD_SEARCH_RESULT', movie })
            dispatch(addMovieSearchResult(movie));
        });
    }
}


export function addMovieSearchResult (movie) {
    return{ 
        type: ADD_SEARCH_RESULT,
        movie 
    } 
}