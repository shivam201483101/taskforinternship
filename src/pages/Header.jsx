import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
<>
     <div className="header-wrapper">
       <div className="search-wrapper">
      <div><SearchIcon /></div>
      
  <input className="search" defaultValue="Search" placeholder="Search"></input>
     </div>
<div className="create-new-button">
<div><NotificationsIcon/></div>
<div className="cnpbutton"><div className="cnptext"><AddIcon/></div> Create New project</div>
</div>
     </div>
      
      <div className="footer2">
        <div className="footer-child" />
        <div className="copyright-2023-reslink-all-wrapper">
          <div className="copyright-2023">
            Copyright © 2023. Reslink. All rights reserved.
          </div>
        </div>
      </div>
      </>
  )
}

export default Header