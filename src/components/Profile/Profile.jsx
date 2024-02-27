"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt="" />
      <h3 className="name">
        {isLoading ? "Loading..." : user ? user.name : "Guest"}
      </h3>
      <p className="role">Student</p>
      <Link href="/profile" className="btn">
        view profile
      </Link>
    </div>
  );
};

export default Profile;
