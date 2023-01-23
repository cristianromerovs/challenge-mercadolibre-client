import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

export const CardCompras = () => {
  const exampleCompras = [
    {
      id: 1,
      titulo: "item 1",
      precio: "19.990",
      cantidad: 2,
      fechaCompra: "13 de enero",
    },
    {
      id: 2,
      titulo: "item 2",
      precio: "10.990",
      cantidad: 1,
      fechaCompra: "21 de diciembre de 2022",
    },
  ];
  return Object.keys(exampleCompras).map((item, i) => (
    <Container className="card-compras my-3" key={i}>
      <Row className="card-compras__fecha p-3">
        <Col xs={12}>
          <p>{exampleCompras[item].fechaCompra}</p>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col xs={12} md={6}>
          <p className="card-compras__id">ID del producto: {exampleCompras[item].id}</p>
          <p className="card-compras__nombre">Nombre producto: {exampleCompras[item].titulo}</p>
        </Col>
        <Col xs={12} md={3}>
          <p className="card-compras__precio">Precio producto: {exampleCompras[item].precio}</p>
          <p className="card-compras__cantidad">Cantidad: {exampleCompras[item].cantidad}</p>
        </Col>
        <Col xs={12} md={3} className='d-flex justify-content-md-center align-items-center'>
          <Link
            to={"/compras/" + exampleCompras[item].id}
            className="btn btn__ver-compra mt-3 mt-md-0"
          >
            Ir a detalle
          </Link>
        </Col>
      </Row>
    </Container>
  ));
};
