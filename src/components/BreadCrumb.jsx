import React from 'react'
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <div className='d-flex'>
        <Link to='/' className="breadcrumb-item">Inicio</Link>
        <span className='mx-2'>/</span>
        <Link to='/profile' className="breadcrumb-item disabled">Mi perfil</Link>
    </div>
  )
}
