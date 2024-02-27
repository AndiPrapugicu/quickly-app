"use client";
import React from "react";
import Link from "next/link";
import Profile from "../Profile/Profile";

const Sidebar = () => {
  const navItems = [
    { to: "/", icon: "fas fa-home", text: "Home" },
    { to: "/about", icon: "fas fa-question", text: "About" },
    { to: "/courses", icon: "fas fa-graduation-cap", text: "Courses" },
    { to: "/teachers", icon: "fas fa-chalkboard-user", text: "Teachers" },
    { to: "/contact", icon: "fas fa-headset", text: "Contact Us" },
  ];

  return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>

      <Profile />

      <nav className="navbar">
        {navItems.map((item, index) => (
          <Link key={index} href={item.to}>
            <i className={item.icon}></i>
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
