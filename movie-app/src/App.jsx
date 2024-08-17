import  React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Navigation from './Navigation'
import CategoryTabs from './CategoryTabs'
import MovieCard from './MovieCard'
import { data } from './data'

function App() {

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col md={12}>
            {data.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
          </Col>
        </Row>


      </Container>      
    </>
  )
}

export default App

