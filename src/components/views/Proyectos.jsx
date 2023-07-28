import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap"

const Proyectos = () => {
    return (
        <Container className='py-4 text-center' id="proyectos">
            <h3 className='text-center text-light titulo mb-3'>Proyectos</h3>
            <Row className='text-light d-flex justify-content-center'>
                <Col xs={8} md={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2'>
                        <h4>PRoyecto 1</h4>
                    </article>
                </Col>
                <Col xs={8} md={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2'>
                        <h4>PRoyecto 2</h4>
                    </article>
                </Col>
                <Col xs={8} md={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2'>
                        <h4>PRoyecto 3</h4>
                    </article>
                </Col>
                <Col xs={8} md={4} className='text-center'>
                    <article className='rounded bg-secondary m-3 p-2'>
                        <h4>PRoyecto 4</h4>
                    </article>
                </Col>

            </Row>
             <a href='https://github.com/joaquin-fuentes' target='_blank' className=' datoContacto btn btn-warning text-dark my-4 '>GITHUB</a>
        </Container>
    );
};

export default Proyectos;