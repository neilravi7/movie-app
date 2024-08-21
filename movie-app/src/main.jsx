import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
// import movies from './reducers/index.js';        
import rootReducer from './reducers/index.js';
import { thunk } from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';


// -------------------------------------------Middleware --------------------------
// const logger = function ({dispatch, getState}) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("Action type: ", action.type);
//       next(action);
//     }
//   }

// }


const logger = ({dispatch, getState}) => (next) => (action) => {
  //middleware code
  // console.log("Action type: ", action.type);
  if(typeof action !== 'function'){
    console.log("ACTION_TYPE: ", action.type);
  }
  next(action);
}


// custom thunk middleware
// const thunk = ({dispatch, getState}) => (next => (action) => {
//   if(typeof action == 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// })

//-----------------------------Middleware-------------------------------------------

const store = createStore(rootReducer, applyMiddleware(logger, thunk));  
console.log("store: ", store);

// console.log("Before State: ", store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name:'Superman'}]
// })

// console.log("After State: ", store.getState());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App store={store}/>
  </StrictMode>,
)
