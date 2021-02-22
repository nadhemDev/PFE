import React from 'react'
import Header from '../Layout/Header'
import Content from '../Layout/Content';
import Main from '../Layout/Main';
import Footer from '../Layout/Footer'
import handelClick from '../Layout/Content'
import Categories from '../Pages/Categories';
import Prod from '../Pages/Prod';


const Home = () => {
    return (
        <div>
      <Header/>
      <Content />
      <Main />
      <Footer/>
        </div>
    )
}

export default Home

