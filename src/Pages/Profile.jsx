import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardUser } from '../Components/Cards/CardUser';
import { MyBreadCrumb } from '../Components/MyBreadCrumb';
// import { CardCompras } from '../Components/Cards/CardCompras';
import Container from 'react-bootstrap/esm/Container';
import { Test } from '../Components/Test';

export const Profile = () => {
  return (
    <Container>
        <Row>
            <MyBreadCrumb routesForBreadcrumb={['/', '/Profile']} />
        </Row>
        <Row className='justify-content-center'>
            <Col xs={12} md={10} xl={8}>
                <CardUser/>
                {/* <CardCompras/> */}
                {/* <Test /> */}
            </Col>
        </Row>
    </Container>
  )
}
