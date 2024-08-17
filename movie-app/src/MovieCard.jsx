import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import React from 'react';

class MovieCard extends React.Component {

id
title
year
runtime
genres
director
actors
plot
posterUrl
    render(){
        const { movie } = this.props;

        return (
            <Card className='p-2'>
                <Row className='justify-content-center'>
                    <Col md={4}>
                        <Card.Img variant='top' src={movie.posterUrl} height={350} />
                    </Col>
                    <Col md="6">
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                {movie.plot}
                            </Card.Text>
                            <Card.Text>
                                <span> {movie.genres} </span> <span>{movie.director}</span>
                            </Card.Text>
                            <Button variant="primary">Favorite</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default MovieCard;