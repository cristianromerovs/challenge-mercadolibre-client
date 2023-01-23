import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardUser } from '../Components/CardUser';
import { MyBreadCrumb } from '../Components/MyBreadCrumb';
import { CardCompras } from '../Components/CardCompras';

export const Profile = () => {
  return (
    <Container>
        <Row>
            <MyBreadCrumb/>
        </Row>
        <Row className='justify-content-center'>
            <Col xs={12} md={10} xl={8}>
                <CardUser/>
                <CardCompras/>
            </Col>
        </Row>
    </Container>
  )
}
