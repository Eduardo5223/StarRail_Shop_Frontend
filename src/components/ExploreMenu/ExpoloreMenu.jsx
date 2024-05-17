import React from 'react'
import './ExploreMenu.css'
import { plat_list } from '../../assets/assets'

const ExpoloreMenu = ({plataforma,setPlataforma}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Seleccion de Plataforma</h1>
        <p className='explore-menu-text'>Escoja de nuestra seleccion de plataformas</p>
        <div className="explore-menu-list">
            {plat_list.map((item,index)=>{
                return(
                    <div onClick={()=>setPlataforma(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={plataforma==item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExpoloreMenu