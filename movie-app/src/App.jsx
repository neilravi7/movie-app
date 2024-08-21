import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Col, Container, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Navigation from './Navigation'
import MovieCard from './MovieCard'

import { data } from './data'
import addMovies from './action'

class App extends React.Component {
  componentDidMount() {

    this.props.store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    })

    this.props.store.dispatch(addMovies(data));
  }

  isMovieFavourites(movie){
    const { movies } = this.props.store.getState(); // {movies:{}, search:{}}
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  render() {
    const {movies, search} = this.props.store.getState(); //movies:{} search:{}
    const { list, favourites } = movies;
    return (
      <>
        <Navigation 
          search={search}
          dispatch={this.props.store.dispatch} 
        />
        <Container className='bg-opacity-10'>
          <Row>
            <Col md={12}>
              <Tabs
                id="interest-tab"
                //activeKey={key}
                // onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="movies" title="Movies">
                  {list.map((movie, index) => 
                    <MovieCard 
                      movie={movie} 
                      key={index} 
                      dispatch={this.props.store.dispatch} 
                      isFavouriteMovie={this.isMovieFavourites(movie)}
                  />)}                  
                </Tab>
                <Tab eventKey="favourites" title="Favourites">
                  {favourites.map((movie, index) => 
                    <MovieCard 
                      movie={movie} 
                      key={index}
                      dispatch={this.props.store.dispatch}  
                      isFavouriteMovie={this.isMovieFavourites(movie)}
                    />)}                  
                </Tab>
              </Tabs>
            </Col>
          </Row>


        </Container>
      </>
    )
  }

}

export default App

