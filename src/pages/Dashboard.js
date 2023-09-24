import {
  Button,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./Dashboard.css";
import Header from "./Header";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LogoutIcon from '@mui/icons-material/Logout';
import LayersIcon from '@mui/icons-material/Layers';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';


import Headersection from "./Headersection";
import Metricgroup from "./Metricgroup";
import Metrics from "./Metrics";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="divhero-blur-bg" />
      <div className="sidebar-navigation">
        <div className="content">
          <div className="nav">
            <div className="header">
              <img className="logo-icon" alt="" src="/logo.svg" />
            </div>
            <nav className="navigation">
            <div className="nav-item-base1">
                <div className="avatar-label-group">
                   <EqualizerIcon/>
                  <div className="text">Dashboard</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
                <LayersIcon/>
                  <div className="text">Projects</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
            <GroupIcon/>
                  <div className="text">Staffing</div>
                </div>
              </div>
              <div className="nav-item-base1">
                <div className="avatar-label-group">
                 <MessageIcon/>
                  <div className="text">Messages</div>
                </div>
              </div>
            </nav>
          </div>
          <div className="footer-parent">
            <nav className="footer">
              <div className="navigation1">
                <div className="nav-item-base4">
                  <div className="avatar-label-group">
                    <EqualizerIcon/>
                    <div className="text">Support</div>
                  </div>
                </div>
                <div className="nav-item-base4">
                  <div className="avatar-label-group">
                 <SettingsIcon/>
                    <div className="text">Settings</div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="footer1">
              <img className="divider-icon" alt="" src="/divider.svg" />
              <div className="account">
                <div className="avatar-label-group">
                  <img className="avatar-icon" alt="" src="/avatar@2x.png" />
                  <div className="text-and-supporting-text">
                    <div className="text5">Olivia Rhye</div>
                    <div className="supporting-text">olivia@untitledui.com</div>
                  </div>
                </div>
                <div className="icon">
             <LogoutIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header/>
      <Headersection/>
      <Metricgroup/>
      <Metrics/>
    
     
    
     
    </div>
  );
};

export default Dashboard;
