import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src='https://www.google.com/url?sa=i&
                url=https%3A%2F%2Fpress.aboutamazon.com%2Fimages-videos%2F&
                psig=AOvVaw1M3UxPTNdJXewyy_idE3Wp&
                ust=1623900632250000&
                source=images&
                cd=vfe&
                ved=0CAIQjRxqFwoTCIDC07Wbm_ECFQAAAAAdAAAAABAK'
                />

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
