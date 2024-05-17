import React, {useContext} from 'react'
import './ProductsDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductsDisplay = ({plataforma}) => {

    const {prod_list} = useContext(StoreContext)

  return (
    <div className='prod-display' id='prod-display'>
        <h2>Plataforma</h2>
        <hr />
        <div className="prod-display-list">
            {prod_list.map((item,index)=>{
              {console.log(plataforma,item.plataforma);}
              if(plataforma=== "All" || plataforma===item.plataforma){

                return <ProductItem key={index} id={item._id} nombre={item.nombre} plataforma={item.plataforma} precio={item.precio} image={item.image}/>
              } 
            })}
        </div>
    </div>
  )
}

export default ProductsDisplay