import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer() {

  const initial = 1;
  const stock = 4;
  const onAdd = ()=>{
    alert("Se ha agregado al carrito")
  };

  return (
    <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
  )
}
