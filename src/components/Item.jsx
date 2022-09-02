import React, {useState, useEffect} from 'react'

export default function item({itemProp}) {

  return (
    <div>
        <div>
            <img src={itemProp.img} style={{width:'100px', height:'auto'}}/>
            <p>nombre: {itemProp.name}</p>
            <p>precio: {itemProp.id}</p>
        </div>
       
    </div>
  )
}
