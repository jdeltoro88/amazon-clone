import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <img
                className='amazzon__logo'
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
                        <input  className='text' />
                        
                    </div>
            
        </div>
    )
}

export default Header
