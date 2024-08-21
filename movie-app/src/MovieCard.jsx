import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import React from 'react';
import { addFavourite, removeFromFavourite } from './action';

class MovieCard extends React.Component {
    
    handleFavouriteClick = () => {
        const { movie} = this.props;
        this.props.dispatch(addFavourite(movie));

    }
    handleUnfavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourite(movie));
    }

    render(){
        const { movie, isFavouriteMovie } = this.props;
        return (
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
                                {isFavouriteMovie ? (<Button variant="danger" onClick={() => this.handleUnfavouriteClick()} >Unfavorite</Button>):(<Button variant="primary" onClick={() => this.handleFavouriteClick()}>Favorite</Button>) }
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default MovieCard;