import { combineReducers } from "redux";
import { 
    ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FROM_FAVOURITE,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT
} from "../action"; // 

const initialMovieState = {
  list: [],
  favourites: [],
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (movieObj) => movieObj.title !== action.movie.title
        ),
      };
    case ADD_MOVIE_TO_LIST:
      state.list = [action.movie, ...state.list]
      return{
        ...state,
        list:state.list
      }
    default:
      return state;
  }
}

const initialSearchState = {
    result:{},
    showSearchResult: false
};

export function search (state = initialSearchState, action){
  
  switch (action.type){
    case ADD_SEARCH_RESULT:
      
    return{
        ...state,
        result:action.movie,
        showSearchResult:true
    }

    default:
      return state

  }
}

const initialRootState = {
    movies:initialMovieState,
    search:initialSearchState
}

// User Defined rootReducer
// export default function rootReducer (state=initialRootState, action){
//     return {
//         movies:movies(state.movies, action),
//         search:search(state.search, action)
//     }    
// }

export default combineReducers(
    {
        movies,
        search
    }
);      