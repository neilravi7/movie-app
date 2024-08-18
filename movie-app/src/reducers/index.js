import { combineReducers } from "redux";
import { 
    ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FROM_FAVOURITE 
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
    default:
      return state;
  }
}

const initialSearchState = {
    result:{}
};

export function search (state = initialSearchState, action){
    return state;
}

const initialRootState = {
    movies:initialMovieState,
    search:initialSearchState
}

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