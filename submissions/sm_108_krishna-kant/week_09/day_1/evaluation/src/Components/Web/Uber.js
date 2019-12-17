import React from 'react';
import Navbar from './items/Navbar';
import Header from './items/Header';
import Showcase from './items/Showcase';
import Safety from './items/Safety';
import Feature from './items/Feature';
import Links from './items/Links';
import Footer from './items/Footer';

class Uber extends React.Component {
  render() {
    return (
      <div>
        <div className='bg-black'>
          <div className='container p-2'>
            <Navbar />
          </div>
        </div>
        <div className='main-header'>
          <Header />
        </div>
        <div className='desc-1 px-5 py-2'>
          <Showcase />
        </div>
        <div className='bg-white p-5'>
          <Safety />
        </div>
        <div className='bg-white p-5'>
          <Feature />
        </div>
        <div className='bg-white px-5'>
          <Links />
        </div>
        <div className='pt-4' style={{ background: 'black', color: 'white' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Uber;
