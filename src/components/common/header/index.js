import React from 'react';
import './header.css';
import sandozImage from './just-eat.png';

const Header = () => {
  return (
    <div className='max-width header'>
        <img src={sandozImage}
        alt='zomato-logo'
        className='header-logo' 
        />
        
        {/* <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='zomato-logo'
        className='header-logo' 
        /> */}

        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                        <i class="fi fi-bs-marker absolute-center location-icon"></i>
                        <div>Bangalore</div>
                    </div>
                    <i class="fi fi-bs-caret-down absolute-center"></i>
                </div>
                <div className='location-search-seperator'></div>
                <div className='header-searchBar'>
                    <i class="fi fi-bs-search absolute-center search-icon"></i>
                    <input 
                    placeholder='Search for restaurant, cuisine or a dish'
                    className='search-input'
                    />
                </div>
            </div>
            <div className='profile-wrapper'>
                <img 
                    src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                    alt='Profile'
                    className='header-profile-image'
                />
                <span className='header-username'>Aayush</span>
                <i className="fi fi-bs-angle-down absolute-center profile-options-icon"></i>
            </div>
        </div>
    


    </div>
  )
}

export default Header