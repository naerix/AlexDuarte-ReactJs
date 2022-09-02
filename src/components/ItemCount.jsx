import React, {useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';


export default function ItemCount({stock, initial, onAdd}) {




    const [contador, setContador] = useState(initial);

    const agregar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const disminuir = ()=>{
        if(contador > initial){
            setContador(contador -1)
        }
    }

  return (

    <div>
        <div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Button variant="outlined" onClick={disminuir}>-</Button>
                <p style={{fontSize:"1.5rem", fontWeight:"600", margin:"1rem"}}>{contador}</p>
                <Button variant="outlined" onClick={agregar}>+</Button>
            </div>
            <div>
                <Button variant="contained"  onClick={onAdd}>Agregar al carrito</Button>
            </div>
            
        </div>
    </div>
  )
}
