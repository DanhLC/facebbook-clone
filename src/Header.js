import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';

function Header() {
  return <div className="header">
      <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
          <div className="header__input">
            <SearchIcon />
            <input placeholder='Search Facebook' type="text" />
          </div>
      </div>

      <div className="header__center">
          <div className="header__option header__option--active">
              <HomeIcon fontSize='large' />
          </div>
          <div className="header__option">
              <FlagIcon fontSize='large' />
          </div>
          <div className="header__option">
              <SubscriptionsOutlinedIcon fontSize='large' />
          </div>
          <div className="header__option">
              <StoreOutlinedIcon fontSize='large' />
          </div>
          <div className="header__option">
              <SupervisedUserCircleIcon fontSize='large' />
          </div>
      </div>

      <div className="header__right">
          <div className="header__info">
              <Avatar src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/45364186_2372535586152465_6937581834809114624_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fNc0SavaO2sAX-GNgyG&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8UVWAdUPR_kyAzv-XDLtDE_tPrUs9WV4DbfHkCdsaYMg&oe=62558387' />
              <h4>Ryuji</h4>
          </div>

          <IconButton>
            <AddIcon />                
          </IconButton>
          <IconButton>
            <ForumIcon />                
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />                
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />                
          </IconButton>
      </div>
  </div>;
}

export default Header