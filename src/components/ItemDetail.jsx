import React, {useState} from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({data}) {
    const [initial,setInitial] = useState(1);
    const [stock, setStock] = useState(4);
    const onAdd = ()=>{
      alert("Se ha agregado al carrito")
    };

  return (
    <div>
        <div>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.image}</p>
            <ItemCount initial={initial} stock={stock} onAdd={onAdd()}/>
        </div>
    </div>
  )
}
