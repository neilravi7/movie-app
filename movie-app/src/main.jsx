import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import movies from './reducers/index.js';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(movies);
console.log(store);

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
