import React, { useContext } from 'react';
import './ProductPage.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ProductPage = (props) => {
  const { producto } = props;
  const { addToCart } = useContext(StoreContext);
  
  const imageUrlBase = 'http://localhost:5000/images/'; 
  
  return (
    <div className='productpage'>
      <div className="productpage-left">
        <div className="productpage-img-list">
          <img src={`${imageUrlBase}${producto.image}`} alt={producto.nombre} />
          <img src={`${imageUrlBase}${producto.image}`} alt={producto.nombre} />
          <img src={`${imageUrlBase}${producto.image}`} alt={producto.nombre} />
          <img src={`${imageUrlBase}${producto.image}`} alt={producto.nombre} />
        </div>
        <div className="productpage-img">
          <img className='productpage-main-img' src={`${imageUrlBase}${producto.image}`} alt={producto.nombre} />
        </div>
      </div>
      <div className="productpage-right">
        <h1>{producto.nombre}</h1>
        <div className="productopage-right-star">
          <img src={assets.star_icon} alt="Star" />
          <img src={assets.star_icon} alt="Star" />
          <img src={assets.star_icon} alt="Star" />
          <img src={assets.star_icon} alt="Star" />
          <img src={assets.star_dull_icon} alt="Star Dull" />
          <p>(122)</p>
        </div>
        <div className="productpage-right-prices">
          <div className="productpage-right-price-new">${producto.precio}</div>
        </div>
        <div className="productpage-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam hic nulla magnam quisquam quaerat omnis nobis distinctio accusantium molestiae dolorum possimus nam expedita doloremque animi quam, tempore quasi. Explicabo.
        </div>
        <br />
        <button onClick={() => { addToCart(producto._id) }}>Agregar al Carro</button>
        <p className='productpage-right-plataforma'><span>Plataforma: </span>{producto.plataforma}</p>
        <p className='productpage-right-sku'><span>SKU: </span>{producto.sku}</p>
      </div>
    </div>
  );
};

export default ProductPage;
