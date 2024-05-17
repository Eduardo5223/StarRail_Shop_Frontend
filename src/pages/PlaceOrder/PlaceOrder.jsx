import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCarAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Información de Entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Calle'/>
        <div className="multi-fields">
          <input type="text" placeholder='Ciudad'/>
          <input type="text" placeholder='Estado'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Codigo Postal'/>
          <input type="text" placeholder='Pais'/>
        </div>
        <input type="text" placeholder='Telefono'/>
      </div>
      <div className="place-order-right">
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
                      <button>Realizar Compra</button>
          </div>     
      </div>

    </form>
  )
}

export default PlaceOrder