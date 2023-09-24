import React from 'react'
import PersonIcon from '@mui/icons-material/Person';


import NoteAltIcon from '@mui/icons-material/NoteAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BookIcon from '@mui/icons-material/Book';

const Metricgroup = () => {
  return (
    <div>  <div className="metric-group">
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="text-and-supporting-text">
            <div className="number">07</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">Active Projects</div>
        </div>
      </div>
    <div className="circled"><PersonIcon/></div> 
    </div>
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="text-and-supporting-text">
            <div className="number">04</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">Proposals</div>
        </div>
      </div>
      <div className="circled"><NoteAltIcon/></div>
    </div>
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="text-and-supporting-text">
            <div className="number">03</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">Active Jobs</div>
        </div>
      </div>
      <div className="circled"><BookIcon/></div>
    </div>
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="text-and-supporting-text">
            <div className="number">240</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">Application</div>
        </div>
      </div>
      <div className="circled"><RemoveRedEyeIcon/></div>
    </div>
  </div>
  </div>
  )
}

export default Metricgroup