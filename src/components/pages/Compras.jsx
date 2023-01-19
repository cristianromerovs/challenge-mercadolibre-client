import React from 'react'
import { useParams } from 'react-router-dom'

export const Compras = () => {
    const {id} = useParams()
  return (
    <div>Compra id: {id}</div>
  )
}
