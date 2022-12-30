import React from 'react'
import {useState, useEffect} from 'react'
import { ProductsList } from '../components/productslist'
import Axios from "axios"
import { NavBar } from './home'

export const TrueHome = () => {
        //Creando mi estado
        const [products, setProducts]= useState([])
        //Agregar algo, hacer algo cuando se cargue
        useEffect(()=> {
            Axios.get("https://frail-bass-handbag.cyclic.app/products")
                .then(response=>{
                    setProducts(response.data)
                })
        }, [])
  return (
    <div className='bg-fondo'>
          <ProductsList products={products}/>
    </div>
  )
}

export default TrueHome