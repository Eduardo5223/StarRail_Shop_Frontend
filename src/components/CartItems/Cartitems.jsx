import React, { useContext } from 'react';
import './CartItems.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const CartItems = () => {
    const { getTotalCarAmount, cartItems, prod_list, removeFromCart } = useContext(StoreContext);
    
    const imageUrlBase = 'http://localhost:5000/images/';

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Producto</p>
                <p>Nombre</p>
                <p>SKU</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Eliminar</p>
            </div>
            <hr />
            {prod_list.map((e) => {
                if (cartItems[e._id] > 0) {
                    return (
                        <div key={e._id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={`${imageUrlBase}${e.image}`} alt={e.nombre} className='cartitems-product-icon' />
                                <p>{e.nombre}</p>
                                <p>{e.sku}</p>
                                <p>${e.precio}</p>
                                <button className='cartitems-cantidad'>{cartItems[e._id]}</button>
                                <p>${e.precio * cartItems[e._id]}</p>
                                <img 
                                    className='cartitems-remove-icon' 
                                    src={assets.cross_icon} 
                                    onClick={() => removeFromCart(e._id)} 
                                    alt="Remove" 
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total de la Compra</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCarAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getTotalCarAmount()}</p>
                        </div>
                    </div>
                    <button>Proceder a Pagar</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
