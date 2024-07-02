
// import React from 'react';
import './Home.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/header/Header';
import Banner from '../../Components/Banner/Banner'

function Home() {
  return (
    <div className='home'>
      <Header />
       <Banner/>  
      <Footer/>
    </div>
  );
}

export default Home;