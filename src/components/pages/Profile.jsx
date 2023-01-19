import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardUser } from '../CardUser';
import { BreadCrumb } from '../BreadCrumb';
import { CardCompras } from '../CardCompras';

export const Profile = () => {
  return (
    <Container>
        <Row>
            <BreadCrumb/>
        </Row>
        <Row className='justify-content-center'>
            <Col xs={10} md={8} className='border'>
                <CardUser/>
                <CardCompras/>
            </Col>
        </Row>
    </Container>
  )
}
