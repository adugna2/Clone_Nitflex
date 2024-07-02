// import React from 'react';
import './Header.css';
import logo_icon from '../../assets/resource/image/logo_icon.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            <li><img src={logo_icon} alt="Netflix Logo" width='100' /></li> 
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className='header-right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li> 
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Header;