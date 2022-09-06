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
            <img src={data.image}  style={{width:'450px', height:'auto'}} />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>${data.price}</p>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </div>
    </div>
  )
}
