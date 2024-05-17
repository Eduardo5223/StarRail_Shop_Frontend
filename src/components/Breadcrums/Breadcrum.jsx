import React from 'react'
import './Breadcrum.css'
import { assets } from '../../assets/assets';

const Breadcrum = (props) => {

    const{producto} = props;

  return (
    <div className='breadcrum'>
        HOME <img src={assets.arrow_icon} alt="" />{producto.plataforma} <img src={assets.arrow_icon} alt="" />{producto.nombre}
    </div>
  )
}

export default Breadcrum