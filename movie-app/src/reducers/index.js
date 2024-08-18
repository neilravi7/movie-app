import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../action";

const initialMovieState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialMovieState, action) {
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
