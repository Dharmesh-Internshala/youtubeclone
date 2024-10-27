import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser, toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <AiOutlineMenu className="navbar__menu-icon" onClick={toggleSidebar} />
        <img src={logo} alt="Logo" className="navbar__logo" onClick={() => navigate("/")} />
      </div>
      <div className="navbar__center">
        <div className="navbar__search-container">
          <input
            type="text"
            placeholder="Search"
            className="navbar__search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="navbar__search-button" onClick={() => searchQueryHandler("searchButton")}>
          <CiSearch size="24px" />
        </button>
        <IoMdMic className="navbar__mic-icon" />
      </div>
      <div className="navbar__right">
        <RiVideoAddLine className="navbar__icon" onClick={() => navigate("/channelpage")} />
        <AiOutlineBell className="navbar__icon" />
        {user ? (
          <>
            <span className="navbar__user">{user}</span>
            <button className="navbar__logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="navbar__sign-in-button" onClick={() => navigate("/login")}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
