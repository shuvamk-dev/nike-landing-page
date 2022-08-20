import React, { useState } from "react";
import "./header.css";

const TABS = ["Women", "Men", "Kids", "Collections"];

const Header = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  return (
    <div className="header">
      <img
        className="header-logo"
        alt="Nike Logo"
        src={require("../../assets/Nike logo.png")}
      />
      <div className="header-tabs-container">
        {TABS.map((_tab) => (
          <div
            className={`${
              activeTab === _tab ? "header-tab header-tab-active" : "header-tab"
            }`}
            onClick={() => setActiveTab(_tab)}
          >
            {_tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
