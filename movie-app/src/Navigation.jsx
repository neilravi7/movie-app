import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addMovieToList, handleMovieSearch } from './action';
import Card from 'react-bootstrap/Card';



class Navigation extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showSearchResult: false,
            searchText: ''
        }
    }


    handleAddMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResult: false
        })
    }


    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    };

    handleChange = (e) => {
        console.log("Value is searching");
        this.setState({
            searchText: e.target.value,
            showSearchResult: true
        });
        
    }



    render() {
        const { result: movie, showSearchResult } = this.props.search;

        return (
            <>
            <Navbar className="bg-dark bg-gradient m-3 shadow">
                <Container className='p-3'>
                    <Navbar.Brand href="#home" className='fs-3 rounded p-1 text-light'>Movie App</Navbar.Brand>

                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="button" variant='light' className='btn-lg' onClick={() => this.handleSearch()}>Search</Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            { this.state.showSearchResult && <Container className='mt-3 mb-3'>
                <h2> Search Result for: {this.state.searchText} </h2>
                
                <Card className='p-2'>
                <Row className='justify-content-center'>
                    <Col md={4}>
                        <Card.Img variant='top' src={movie.Poster} height={350} />
                    </Col>
                    <Col md="6">
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                                {movie.Plot}
                            </Card.Text>
                            <Card.Text>
                                <span> {movie.Genres} </span> <span>{movie.Director}</span>
                            </Card.Text>
                            <div className='d-flex'>
                                <Button variant="success" onClick={() => this.handleAddMovies(movie)} >Add To List</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Container>}
            </>
        );
    }
}

export default Navigation;

