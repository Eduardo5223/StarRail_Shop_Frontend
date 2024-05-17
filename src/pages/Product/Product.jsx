import React, { useContext } from 'react'
import './Product.css'
import { StoreContext } from '../../context/StoreContext'
import Breadcrum from '../../components/Breadcrums/Breadcrum'
import { useParams } from 'react-router-dom'
import ProductPage from '../../components/ProductPage/ProductPage'

const Product = () => {
    
    const {prod_list} = useContext(StoreContext)
    const {productId} = useParams()
    const producto = prod_list.find((e)=> e._id === Number(productId))

  return (
    <div>
        <Breadcrum producto={producto}/>
        <ProductPage producto={producto}/>
    </div>
  )
}

export default Product