import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Teachers() {
  const teachersData = [
    {
      tutor: "Olivia Carter",
      thumbnail: "thumb-1.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-2.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Ethan Johnson",
      thumbnail: "pic-2.jpg",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-2.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Jackson White",
      thumbnail: "thumb-3.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-3.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Sophia Anderson",
      thumbnail: "thumb-4.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-4.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Aiden Brown",
      thumbnail: "thumb-5.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-5.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Emma Taylor",
      thumbnail: "thumb-6.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-6.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Mason Miller",
      thumbnail: "thumb-7.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-7.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Ava Davis",
      thumbnail: "thumb-8.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-8.jpg",
      date: "21-10-2022",
    },
    {
      tutor: "Liam Martinez",
      thumbnail: "thumb-9.png",
      role: "developer",
      playlists: 4,
      videos: 18,
      likes: 1208,
      image: "pic-9.jpg",
    },
  ];

  return (
    <div className="teachers">
      <Sidebar />
      <Header />
      <div>
        <section className="teachers">
          <h1 className="heading">expert teachers</h1>

          <form action="" method="post" className="search-tutor">
            <input
              type="text"
              name="search_box"
              placeholder="search tutors..."
              required
              maxLength="100"
            />
            <button
              type="submit"
              className="fas fa-search"
              name="search_tutor"
            ></button>
          </form>

          <div className="box-container">
            {teachersData.map((teacher, index) => (
              <div key={index} className="box">
                {index === 0 && (
                  <div className="box offer">
                    <h3>become a tutor</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet, itaque ipsam fuga ex et aliquam.
                    </p>
                    <Link href="/register" className="inline-btn">
                      get started
                    </Link>
                  </div>
                )}
                <div className="tutor">
                  <img src={`images/${teacher.image}`} alt={teacher.tutor} />
                  <div className="info">
                    <h3>{teacher.tutor}</h3>
                    <span>{teacher.date}</span>
                  </div>
                </div>
                <p>
                  total playlists : <span>{teacher.playlists}</span>
                </p>
                <p>
                  total videos : <span>{teacher.videos}</span>
                </p>
                <p>
                  total likes : <span>{teacher.likes}</span>
                </p>
                <Link href="/teachers/profile" className="inline-btn">
                  view profile
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
