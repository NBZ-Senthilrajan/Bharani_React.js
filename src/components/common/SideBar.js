import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <Sidebar
      className="sidebar"
      sidebar={
        <>
          <h4>Sidebar content</h4>
          <br />
          <div className="side_item">
            <h6>Dashboard</h6>
            <h6>Profile</h6>
            <h6>Summary</h6>
            <h6>Menu</h6>
            <h6>Setting</h6>
            <h6>Logout</h6>
          </div>
        </>
      }
      open={sideBarOpen}
      onSetOpen={()=>setSideBarOpen(false)}
      styles={{
        sidebar: { background: "rgb(235, 136, 212)", padding: "20px" },
      }}
    >
      <div className="menu-icon fs-2">
        <div onClick={() => setSideBarOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
