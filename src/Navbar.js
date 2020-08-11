import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <img
        className="navbar__avatar"
        src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Navbar;
