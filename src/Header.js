import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <img className= 'header__logo' src='https://cdn4.iconfinder.com/data/icons/orange-social-icons/484/amazon.png'/>
                
                

                <div
                    className='header__search'>
                        <input  className= 'header__searchInput' type= 'text' />

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

                    </div>
            
        </div>
    )
}

export default Header
