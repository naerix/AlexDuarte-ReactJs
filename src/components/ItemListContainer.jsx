import React, { useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [initial,setInitial] = useState(1)
  const [stock, setStock] = useState(4)
  const onAdd = ()=>{
    alert("Se ha agregado al carrito")
  };

  const [producto, setProducto] = useState([])
  const [error, setError]= useState('')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let itemPromise = new Promise((res,rej)=>{
      setTimeout(() => {
        res([
          {id:100, name:'guitarra', price:200, img:'https://http2.mlstatic.com/D_NQ_NP_638905-MLA25130107615_102016-O.webp'},
          {id:100, name:'bajo', price:200, img:'https://http2.mlstatic.com/D_NQ_NP_638905-MLA25130107615_102016-O.webp'},
          {id:100, name:'amplificador', price:200, img:'https://http2.mlstatic.com/D_NQ_NP_638905-MLA25130107615_102016-O.webp'}
        ])
      }, 2000);

      itemPromise
      .then((res)=>{
        setProducto(res)
      })
      .catch((err)=> {
        setError(err)
      })
      .finally(()=>{
        setLoading(false)
      })
    })
  },[])
  return (
    <div>
      <p>{loading === true ? 'cargando...': null}</p>
      <ItemList items={producto}/>
    </div>
  )
}
