import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return <div className="sidebar">
      <SidebarRow 
        src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/45364186_2372535586152465_6937581834809114624_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fNc0SavaO2sAX-GNgyG&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8UVWAdUPR_kyAzv-XDLtDE_tPrUs9WV4DbfHkCdsaYMg&oe=62558387' 
        title='Ryuji' />
      <SidebarRow 
        Icon={LocalHospitalIcon}
        title='Covid 19 Information Center' />
      <SidebarRow 
        Icon={EmojiFlagsIcon}
        title='Pages' />
      <SidebarRow 
        Icon={PeopleIcon}
        title='Friends' />
      <SidebarRow 
        Icon={ChatIcon}
        title='Messenger' />
      <SidebarRow 
        Icon={StorefrontIcon}
        title='Marketplace' />               
      <SidebarRow 
        Icon={VideoLibraryIcon}
        title='Videos' />
      <SidebarRow 
        Icon={ExpandMoreOutlinedIcon}
        title='Marketplace' />                        
  </div>;
}

export default Sidebar