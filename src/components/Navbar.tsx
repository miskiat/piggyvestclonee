import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-links">
        <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg" />
        <div className="links">
          <span>Save</span>
          <span>Invest</span>
          <span>Stories</span>
          <span>FAQs</span>
          <span>Blog</span>
        </div>
      </div>

      <div>
        <button className="sign">Sign in</button>
        <button className="account">Create free account</button>
      </div>
    </div>
  );
};

export default Navbar;
