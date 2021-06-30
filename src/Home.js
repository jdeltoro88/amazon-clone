import React from 'react'
import './Home.css';
import Product from './Product.js'

function Home() {
    return (
        <div classname='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src='https://i1.wp.com/fintechranking.com/wp-content/uploads/2017/03/AMAZON-1200x537.png?fit=1200%2C537&ssl=1' alt='amazon banner' />

                    <div className='home__row'>
                        <Product />
                        <Product />
                     
                    </div>

                    <div className='home__row'>
                        <Product />
                        <Product />
                        <Product />

                         </div>

                         <div className='home__row'>
                             <Product />

                         </div>
                    
            </div>
            
        </div>
    )
}

export default Home
