import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./header.scss"
const Header = () => {
  return (
    <header className="header d-flex justify-content-between">
      <div className="menu-icon  fs-2">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="search-bar p-2">
        <div class="input-group mb-3  ">
  <button class="btn btn-outline-secondary rounded-start-5 bg-white border-0" type="button" id="button-addon1">
  <i class="fa fa-circle-thin" aria-hidden="true"></i>
  </button>
  <input type="text" class="form-control rounded-end-5" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
      </div>
    </header>
  );
};

export default Header;
