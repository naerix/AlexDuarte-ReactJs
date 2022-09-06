import React, { useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [e, setE]= useState('error');
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setItems(json))
    .catch((e)=> console.log(e))
    .finally(()=> console.log('finalizo'));
  },[]);
  return (
    <div>
      <ItemList item={items}/>
    </div>
  )
}
