import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Navigation extends React.Component{

    render () {
        return (

            <Navbar expand="lg" className="bg-danger bg-gradient mb-3 ">
                <Container className='p-2'>
                    <Navbar.Brand href="#home" className='fs-3 bg-dark text-danger rounded p-3'>Movie App</Navbar.Brand>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button variant='dark' className='btn-lg'>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
    
        );

    }
    

}

export default Navigation;