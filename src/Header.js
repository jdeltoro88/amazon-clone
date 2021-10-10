import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from  "react-router-dom";


function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className= 'header__logo' 
            src='https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png'/>
            </Link>
                
                

                <div
                    className='header__search'>
                        <input  className= 'header__searchInput' type= 'text' />
                        <SearchIcon className='header__searchIcon' />

                        {/* logo */}


                    </div>

                    <div className="header__nav">
                        <div className='header__option'>
                            <span className= 'header__optionLineOne'> hello guest </span>
                            <span className='header__optionLineTwo'> Sign In </span>

                        </div>

                        <div className='header__option'>
                            <span className= 'header__optionLineOne'> Returns </span>
                            <span className='header__optionLineTwo'> & Orders </span>
                            
                        </div>

                        <div className='header__option'>
                            <span className= 'header__optionLineOne'> your</span>
                            <span className='header__optionLineTwo'> Prime </span>
                            
                        </div>
                        
                        <Link to = '/checkout'>
                        <div className='header__optionBasket'>
                            <ShoppingBasketIcon/>
                            <span className="header__optionLineTwo header__basketCount">
                                0

                            </span>
                        </div>
                        </Link>

                    </div>
            
        </div>
    )
}

export default Header
