import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

export const CardDetalle = () => {
  return (
    <Col xs={12} md={8}>
      <div className="card-detalle p-3">
        <div className="d-flex d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="card-detalle__estado-envio mb-3">Estado del envio</p>
            <p className="card-detalle__titulo-item mb-2">Titulo Item</p>
            <p className="card-detalle__fecha mb-2">Fecha compra</p>
            <p className="card-detalle__cantidad-item mb-2">Cantidad</p>
          </div>
          <div className="img-placeholder"></div>
        </div>
        <hr />
        <div className="card-detalle__vendedor d-flex align-items-center">
          <div className="img-placeholder"></div>
          <div className="d-flex flex-column ms-3">
            <p className="card-detalle__vendedor-name">Nombre vendedor</p>
            <Link className="btn-mensajes" to={"/"}>
              Ver mensajes
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
