import React from "react";
import "../styles/navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function navbar() {
  return (
    <header id="Navbar" className="navbar">
      <div className="nav-container">
        <div className="primary-options">
          <div className="main-logo">EDYODA</div>

          <div className="re-pages">
            <div>
              Courses
              <FaChevronDown />
            </div>
            <div>
              Programs <FaChevronDown />
            </div>
          </div>
        </div>

        <div className="right-options">
          <AiOutlineSearch />
          <div>Log in</div>
          <button className="join-btn">
            Join Now
        </button>
        </div>
        
       
      </div>
    </header>
  );
}

export default navbar;
