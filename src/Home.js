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
                        <Product 
                        id = "148397"
                        title= 'the Lean Startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={2}
                        />
                        <Product 
                        id= '41413'
                        title= "kenwood kmix"
                        price={239.90}
                        rating={4}
                        image= "https://m.media-amazon.com/images/I/61VFjSwFXWL._AC_SL1200_.jpg"
                        />
                     
                    </div>

                    <div className='home__row'>
                        <Product
                        id = "82437987"
                        title = "samsung gaming monitor"
                        price = {199.9}
                        rating = {3}
                        image = "https://cdn.mos.cms.futurecdn.net/GyrNsUpoedbNzjr6ASHkzB.jpg" />
                        
                        <Product 
                        id = "524543"
                        title = "iphone case"
                        price = {30}
                         image = "https://m.media-amazon.com/images/I/61eXIneoQnL._AC_SX522_.jpg"/>
                        <Product />

                         </div>

                         <div className='home__row'>
                             <Product />
                             <Product />

                         </div>
                    
            </div>
            
        </div>
    )
}

export default Home
