/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from  "react-router-dom";
import { useStateValue } from './StateProvider';



function Header() {
    const [{basket}] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img className= 'header__logo' 
            src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/amazon-512.png'/>
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
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                        </Link>
                        </div>
                        </div> 
                        )}

export default Header
