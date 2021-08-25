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
                        rating={1}
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
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/61eXIneoQnL._AC_SX522_.jpg"/>
                      

                         </div>

                         <div className='home__row'>
                             <Product
                             id = "59767693"
                             title = "water filter"
                             price = {15}
                             rating = {5} 
                             image = "https://b3h2.scene7.com/is/image/BedBathandBeyond/lf_378762769537022p_imageset?$690$&wid=690&hei=690"/>

                            <Product
                             id = "5976786"
                             title = "poster"
                             price = {100}
                             rating = {5} 
                             image = "https://ae01.alicdn.com/kf/HTB1qoTUNVXXXXXRXXXXq6xXFXXXL/Bruce-Lee-THE-WAY-OF-THE-DRAGON-Art-Silk-Poster-Print-13x20-24x36-inch-Super-Kung.jpg_Q90.jpg_.webp"/>
                           
                           

                         </div>
                    
            </div>
            
        </div>
    )
}

export default Home
