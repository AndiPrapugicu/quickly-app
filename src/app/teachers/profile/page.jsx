import Link from "next/link";
import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const TeacherProfile = () => {
  const profileDetails = {
    name: "John Deo",
    role: "Developer",
    totalPlaylists: 4,
    totalVideos: 18,
    totalLikes: 1208,
    totalComments: 52,
    image: "pic-2.jpg",
  };
  return (
    <div className="">
      <Sidebar />
      <Header />
      <section className="teacher-profile">
        <h1 className="heading">Profile Details</h1>
        <div className="details">
          <div className="tutor">
            <img src={`/images/${profileDetails.image}`} alt="" />
            <h3>{profileDetails.name}</h3>
            <span>{profileDetails.role}</span>
          </div>
          <div className="flex">
            <p>
              Total playlists : <span>{profileDetails.totalPlaylists}</span>
            </p>
            <p>
              Total videos : <span>{profileDetails.totalVideos}</span>
            </p>
            <p>
              Total likes : <span>{profileDetails.totalLikes}</span>
            </p>
            <p>
              Total comments : <span>{profileDetails.totalComments}</span>
            </p>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="thumb">
                <img src="/images/thumb-1.png" alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete HTML tutorial</h3>
              <Link href="/playlist" className="inline-btn">
                view playlist
              </Link>
            </div>

            <div className="box">
              <div className="thumb">
                <img src="/images/thumb-2.png" alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete CSS tutorial</h3>
              <Link href="/playlist" className="inline-btn">
                view playlist
              </Link>
            </div>

            <div className="box">
              <div className="thumb">
                <img src="/images/thumb-3.png" alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete javascript tutorial</h3>
              <Link href="/playlist" className="inline-btn">
                view playlist
              </Link>
            </div>

            <div className="box">
              <div className="thumb">
                <img src="/images/thumb-4.png" alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete Boostrap tutorial</h3>
              <Link href="/playlist" className="inline-btn">
                view playlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfile;
