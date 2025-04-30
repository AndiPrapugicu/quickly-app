"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="profile">
      <Image src="/images/profile.jpg" alt="Profile" width={100} height={100} />
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
