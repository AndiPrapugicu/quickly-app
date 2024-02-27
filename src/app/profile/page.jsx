"use client";
import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { FaBookmark, FaHeart, FaComment } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";

const UserProfile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading user profile</p>;
  }

  const userInfo = {
    name: user ? user.name : "Guest",
    role: "Student", // You can customize or fetch this based on your application logic
    image: user ? user.picture : "/images/pic-1.jpg", // Use a default image if user picture is not available
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <section className="user-profile">
        <h1 className="heading">Your Profile</h1>

        <div className="info">
          <div className="user">
            <img src="/images/pic-1.jpg" alt={userInfo.name} />
            <h3>{userInfo.name}</h3>
            <p>{userInfo.role}</p>
            <a href="/update" className="inline-btn">
              Update Profile
            </a>
          </div>

          <div className="box-container">
            <ProfileBox
              icon={<FaBookmark />}
              count={4}
              label="Saved Playlist"
              link="#"
            />
            <ProfileBox
              icon={<FaHeart />}
              count={33}
              label="Videos Liked"
              link="#"
            />
            <ProfileBox
              icon={<FaComment />}
              count={12}
              label="Videos Comments"
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileBox = ({ icon, count, label, link }) => {
  return (
    <div className="box">
      <div className="flex">
        <i className="fas fa-bookmark">{icon}</i>
        <div>
          <span>{count}</span>
          <p>{label}</p>
        </div>
      </div>
      <a href={link} className="inline-btn">
        View {label.toLowerCase()}
      </a>
    </div>
  );
};

export default UserProfile;
