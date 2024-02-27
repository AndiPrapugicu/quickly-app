import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import React from "react";

const Courses = () => {
  const coursesData = [
    {
      tutor: "Olivia Carter",
      date: "21-10-2022",
      thumbnail: "thumb-1.png",
      title: "complete HTML tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Ethan Johnson",
      date: "21-10-2022",
      thumbnail: "thumb-2.png",
      title: "complete CSS tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Jackson White",
      date: "21-10-2022",
      thumbnail: "thumb-3.png",
      title: "complete JS tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Sophia Anderson",
      date: "21-10-2022",
      thumbnail: "thumb-4.png",
      title: "complete Boostrap tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Aiden Brown",
      date: "21-10-2022",
      thumbnail: "thumb-5.png",
      title: "complete JQuery tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Emma Taylor",
      date: "21-10-2022",
      thumbnail: "thumb-6.png",
      title: "complete SASS tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Mason Miller",
      date: "21-10-2022",
      thumbnail: "thumb-7.png",
      title: "complete PHP tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Ava Davis",
      date: "21-10-2022",
      thumbnail: "thumb-8.png",
      title: "complete MySQL tutorial",
      playlistLink: "/playlist",
    },
    {
      tutor: "Liam Martinez",
      date: "21-10-2022",
      thumbnail: "thumb-9.png",
      title: "complete React tutorial",
      playlistLink: "/playlist",
    },
  ];

  return (
    <div>
      {/* <Header /> */}
      <Sidebar />
      <section className="courses">
        <h1 className="heading">our courses</h1>
        <div className="box-container">
          {coursesData.map((course, index) => (
            <div className="box" key={index}>
              <div className="tutor">
                <img src={`images/pic-${index + 2}.jpg`} alt="" />
                <div className="info">
                  <h3>{course.tutor}</h3>
                  <span>{course.date}</span>
                </div>
              </div>
              <div className="thumb">
                <img src={`images/${course.thumbnail}`} alt="" />
                <span>10 videos</span>
              </div>
              <h3 className="title">{course.title}</h3>
              <a href={course.playlistLink} className="inline-btn">
                view playlist
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
