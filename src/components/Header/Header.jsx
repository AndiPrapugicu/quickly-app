"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaUser, FaSun, FaMoon } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user, error, isLoading } = useUser();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      enableDarkMode();
    }
  }, [darkMode]);

  const enableDarkMode = () => {
    setDarkMode(true);
    document.body.classList.add("dark");
    localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
    setDarkMode(false);
    document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disabled");
  };

  const toggleDarkMode = () => {
    darkMode ? disableDarkMode() : enableDarkMode();
  };

  const handleSidebarCloseBtnClick = () => {
    const sideBar = document.querySelector(".side-bar");
    const body = document.body;

    sideBar.classList.remove("active");
    body.classList.remove("active");
  };

  const handleUserBtnClick = () => {
    const profile = document.querySelector(".header .flex .profile");
    const search = document.querySelector(".header .flex .search-form");

    profile.classList.toggle("active");
    search.classList.remove("active");

    handleSidebarCloseBtnClick();
  };

  const handleMenuBtnClick = () => {
    setIsSidebarActive(!isSidebarActive);
    const sideBar = document.querySelector(".side-bar");
    const body = document.body;

    if (sideBar && body) {
      console.log("Closing sidebar!");
      sideBar.classList.remove("active");
      body.classList.remove("active");
    } else {
      console.log("Sidebar or body element not found!");
    }
  };

  return (
    <div className="header">
      <header className="header">
        <section className="flex">
          <Link href="/" className="logo">
            Quickly
          </Link>

          <form action="search.html" method="post" className="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxLength="100"
            />
            <button type="submit" className="fas fa-search"></button>
          </form>

          <div className="icons">
            <div
              id="menu-btn"
              className="fas fa-bars iconita"
              onClick={handleMenuBtnClick}
            >
              <FaBars />
            </div>
            <div id="search-btn" className="fas fa-search">
              <FaSearch />
            </div>
            <div
              id="user-btn"
              className="fas fa-user iconita"
              onClick={handleUserBtnClick}
            >
              <FaUser />
            </div>
            <div
              id="toggle-btn"
              className={
                darkMode ? "fas fa-moon iconita" : "fas fa-sun iconita"
              }
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </div>
          </div>

          <div className="profile">
            <img src="images/pic-1.jpg" className="image" alt="" />
            <h3 className="name">{user ? user.name : "Guest"}</h3>
            <p className="role">Student</p>
            <Link href="/profile" className="btn">
              view profile
            </Link>
            <div className="flex-btn">
              {user ? (
                <a href="/api/auth/logout" className="option-btn">
                  Logout
                </a>
              ) : (
                <>
                  <a href="/api/auth/login" className="option-btn">
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
