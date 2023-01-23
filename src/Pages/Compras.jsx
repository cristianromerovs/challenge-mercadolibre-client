import Row from "react-bootstrap/esm/Row";
import { AsideDetalle } from "../Components/AsideDetalle";
import { CardDetalle } from "../Components/CardDetalle";
import { MyBreadCrumb } from "../Components/MyBreadCrumb";

export const Compras = () => {
  // const {id} = useParams()
  return (
    <>
      <MyBreadCrumb routesForBreadcrumb={["/", "/Profile", "/Compras"]} />
      <Row>
        <CardDetalle />
        <AsideDetalle />
      </Row>
    </>
  );
};
