import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import './banner.css'
import Photo from '../../banner-img.png'

const Banner = () => {
    return (
        <div>
            <section className='middle-banner'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='left-banner-header'>
                                <p>Stay in Talk <br /> with Optimal Business Performance</p>
                            </div>

                            <p className='text'>Your partner for incredible mobile and web products. Finally delivered in great quality and on time.</p>
                        </Col>

                        <Col>
                            <div className='right-banner'>
                                <img
                                    className='object-animation'
                                    src={Photo}
                                    alt='logo'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner