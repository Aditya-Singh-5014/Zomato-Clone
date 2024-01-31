import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato Logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fa fa-location-dot absolute-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <div>
              <i class="fa-solid fa-caret-down absolute-center"></i>
            </div>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input type="text" placeholder="Search for resturant, cusine or a dish" className="search-input" />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="https://b.zmtcdn.com/data/user_profile_pictures/ffa/d402f889db03955293e3d68a2bfbdffa.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile Pic" className="header-profile-image"/>
          <span className="header-user-name">Akash</span>
          <i className="fa-solid fa-chevron-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
