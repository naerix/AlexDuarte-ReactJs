import React, {useState, useEffect} from 'react'
import Item from './Item';

export default function ItemList({items}) {

 
  return (
    <div>
        {items.map( (item) => {
            return( <Item itemProp={item}/>)
        })}

    </div>
    
  )
}
