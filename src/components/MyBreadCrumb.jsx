import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "react-bootstrap/Breadcrumb";

export const MyBreadCrumb = () => {
  return (
    <Breadcrumb>
      <ol className="breadcrumb">
        <Link className="breadcrumb-item" to={"/"}>
          Inicio
        </Link>
        <Link
          className="breadcrumb-item active"
          to={"/profile"}
          aria-current="page"
        >
          Mi perfil
        </Link>
      </ol>
    </Breadcrumb>
  );
};
