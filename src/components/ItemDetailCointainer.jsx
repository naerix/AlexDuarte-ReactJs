import React, {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailCointainer() {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=> setData(json))
        .catch((e)=> console.log(e))
        .finally(()=> console.log('carga completada'));
      },[]);

  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}
