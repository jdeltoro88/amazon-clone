import React from 'react'
import './Checkout.css'


function Checkout() {
    return (
        <div className = 'checkout'>
            <div className = 'checkout__left'>
                <img 
                className = 'checkout__ad' 
            
                src = 'https://images.squarespace-cdn.com/content/v1/554147dae4b044ed48fef3af/1542863129976-8IFD16VJ0UN8G9LCE99I/Prime-Day-Savings-Banner.jpg?format=1000w'
                alt = 'amazon banner'
                />
                
                <div>
                    <h2 className = 'checkout__title'>
                        YOUR SHOPPING BASKET</h2>

                        {/*item*/}
                            {/*item*/}
                                {/*item*/}
                                    {/*item*/}
                                        {/*item*/}
                            
                </div> 
            </div>

            <div className = "checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
