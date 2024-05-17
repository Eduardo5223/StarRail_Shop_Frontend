import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartItems,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="Image Error" className="logo"/></Link>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}><Link to='/'>Home</Link></li>
          <a href='#explore-menu' onClick={()=>setMenu("xbox")} className={menu=="xbox"?"active":""}>Seleccion de Plataforma</a>
          <li onClick={()=>setMenu("ps5")} className={menu=="ps5"?"active":""}>PS5</li>
          <li onClick={()=>setMenu("ns")} className={menu=="nintendo_switch"?"active":""}>Nintendo Switch</li>
          <li onClick={()=>setMenu("other")} className={menu=="other"?"active":""}>Other</li>
        </ul>
        <div className='navbar-right'>
            <div className='navbar-search-icon'>
              <Link to='/cart'><img src={assets.shopping_cart} alt="Image Error" className='cart-img'/></Link>
              <div className='dot'>{getTotalCartItems()}</div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
            : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <u className='nav-profile-dropdown'>
                <li><img src={assets.bag_icon} alt="" />Orders</li>
                <hr />
                <li onClick={logout}><img src={assets.bag_icon} alt="" />Logout</li>
              </u>
              </div>}
            
        </div>
    </div>

  )
}

export default Navbar