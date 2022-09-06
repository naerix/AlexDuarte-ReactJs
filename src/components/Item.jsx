import React, {useState, useEffect} from 'react'

export default function item({itemProp}) {

  return (
    <div>
        <div>
            <img src={itemProp.image} style={{width:'150px', height:'auto'}}/>
            <p> {itemProp.title}</p>
            <p>${itemProp.price}</p>
        </div>
       
    </div>
  )
}
