import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Image Error" className='logo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero. Impedit magnam itaque et reiciendis alias, voluptatibus sed. Fuga accusantium neque consequuntur culpa cumque deserunt sit dignissimos reprehenderit velit deleniti.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.linkedin} alt="" />
                    <img src={assets.twitter} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Star Rail Videogame Shop</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre nosotros</li>
                    <li>Preguntas frecuentes</li>
                    <li>Politicas de Privacidad</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contactanos</h2>
                <ul>
                    <li>+52 999-365-5728</li>
                    <li>starailshop@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © StarRailVideogameShop.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer