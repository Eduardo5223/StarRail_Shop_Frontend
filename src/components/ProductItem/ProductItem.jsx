import React, { useContext } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const ProductItem = (props) => {
  const{url} = useContext(StoreContext)
  return (
    <div className='prod-item'>
        <div className="prod-item-img-container">
            <Link to={`/producto/${props.id}`}><img className='prod-item-image' src={url+"/images/"+props.image} alt="" /></Link>
        </div>
        <div className="prod-item-info">
            <div className="prod-item-name-rating">
                <p>{props.nombre}</p>
            </div>
            <br />
            <p className="prod-item-plat">{props.plataforma}</p>
            <br />
            <p className="prod-item-price">${props.precio}</p>
        </div>
    </div>
  )
}

export default ProductItem