import React from "react";

import "./header.scss";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className="header d-flex justify-content-between">
      <div className="menu-ico fs-2">
        <SideBar />
      </div>
      <div className="search-bar p-2">
        <div className="input-group mb-3  ">
          <button
            className="btn btn-outline-secondary rounded-start-5 bg-white border-0"
            type="button"
            id="button-addon1"
          >
            <i className="fa fa-circle-thin" aria-hidden="true"></i>
          </button>
          <input
            type="text"
            className="form-control rounded-end-5"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
