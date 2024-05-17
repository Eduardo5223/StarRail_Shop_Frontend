import React, {useState}from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ProductsDisplay from '../../components/ProductsDisplay/ProductsDisplay'
import ExpoloreMenu from '../../components/ExploreMenu/ExpoloreMenu'

const Home = () => {

  const [plataforma,setPlataforma] = useState("All");

  return (
    <div>
      <Header/>
      <ExpoloreMenu plataforma={plataforma} setPlataforma={setPlataforma}/>
      <ProductsDisplay plataforma={plataforma}/>
    </div>
  )
}

export default Home