import React from "react";
import { useHistory } from 'react-router-dom'
import '../scss/navbar.scss'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <div className="navbar ">
      <div className="navbar__container">
        <div className="navbar__row">
          <div className="navbar__main-title">React and TypeScript</div>
          <div className="navbar__refs">
            <div className="refs__item" onClick={() => history.push('/')}> Notes List</div>
            <div className="refs__item" onClick={() => history.push('/about')}> About</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar