import React from "react";
import { Link } from "react-router-dom";

export const CardCompras = () => {
    const exampleCompras = [{
        id: 1,
        titulo: 'item 1',
        precio: '19.990',
        cantidad: 2,
        fechaCompra: '21/12/2022'
    },
    {
        id: 2,
        titulo: 'item 2',
        precio: '10.990',
        cantidad: 1,
        fechaCompra: '01/01/2023'
    }]
    return (
        Object.keys(exampleCompras).map((item, i) => (
            <li className="d-flex flex-column border rounded my-3 p-3" key={i}>
                <p className="input-label m-0">ID del producto: { exampleCompras[item].id }</p>
                <p className="input-label m-0">Nombre producto: { exampleCompras[item].titulo }</p>
                <p className="input-label m-0">Precio producto: { exampleCompras[item].precio }</p>
                <p className="input-label m-0">Cantidad: { exampleCompras[item].cantidad }</p>
                <p className="input-label m-0">Fecha compra: { exampleCompras[item].fechaCompra }</p>
                <Link to={ '/compras/'+ exampleCompras[item].id } className='btn btn-primary'>Ir a detalle</Link>
            </li>
        ))
    )
};
