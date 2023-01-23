import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export const CardUser = () => {
  return (
    <Container className="card-user p-3">
      <Row>
        <Col xs={3} md={2} className='d-flex flex-column align-items-center'>
          <div className="img-placeholder"></div>
          <p className="card-user__nick mt-2">Nickname</p>
        </Col>
        <Col xs={9} md={10}>
          <p className="card-user__nombre">Nombre completo del usuario</p>
          <p className="card-user__nivel">Nivel de Mercado Puntos</p>
          <p className="card-user__restricciones">* Restricciones</p>
        </Col>
      </Row>
    </Container>
  );
};
