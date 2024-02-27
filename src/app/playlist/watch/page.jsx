import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Link from "next/link";

const Video = () => (
  <div className="video-container">
    <div className="video">
      <video
        src="/images/vid-1.mp4"
        controls
        poster="/images/post-1-1.png"
        id="video"
      ></video>
    </div>
    <h3 className="title">complete HTML tutorial (part 01)</h3>
    <div className="info">
      <p className="date">
        <i className="fas fa-calendar"></i>
        <span>22-10-2022</span>
      </p>
      <p className="date">
        <i className="fas fa-heart"></i>
        <span>44 likes</span>
      </p>
    </div>
    <div className="tutor">
      <img src="/images/pic-2.jpg" alt="" />
      <div>
        <h3>Olivia Carter</h3>
        <span>developer</span>
      </div>
    </div>
    <form action="" method="post" className="flex">
      <Link href="/playlist" className="inline-btn">
        view playlist
      </Link>
      <button>
        <i className="far fa-heart"></i>
        <span>like</span>
      </button>
    </form>
    <p className="description">
      Uncover the secrets of CSS flexbox in this engaging video tutorial.
      Discover how to create responsive layouts, align items effortlessly, and
      enhance your web design skills. Whether you're a novice or looking to
      refine your CSS expertise, join us on this journey to mastering flexbox
      and elevating your web development projects.
    </p>
  </div>
);

const CommentForm = () => (
  <form action="" className="add-comment">
    <h3>add comments</h3>
    <textarea
      name="comment_box"
      placeholder="enter your comment"
      required
      maxLength="1000"
      cols="30"
      rows="10"
    ></textarea>
    <input
      type="submit"
      value="add comment"
      className="inline-btn"
      name="add_comment"
    />
  </form>
);

const Comment = ({ user, date, text }) => (
  <div className="box">
    <div className="user">
      <img src={`/images/${user.pic}`} alt="" />
      <div>
        <h3>{user.name}</h3>
        <span>{date}</span>
      </div>
    </div>
    <div className="comment-box">{text}</div>
    <form action="" className="flex-btn">
      <input
        type="submit"
        value="edit comment"
        name="edit_comment"
        className="inline-option-btn"
      />
      <input
        type="submit"
        value="delete comment"
        name="delete_comment"
        className="inline-delete-btn"
      />
    </form>
  </div>
);

const Comments = () => (
  <section className="comments">
    <h1 className="heading">5 comments</h1>
    <CommentForm />

    <h1 className="heading">user comments</h1>

    <div className="box-container">
      {[
        {
          user: { name: "Andi Prapugicu", pic: "pic-1.jpg" },
          date: "22-10-2022",
          text: "this is a comment from Andi Prapugicu",
        },
      ].map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  </section>
);

export default function WatchVideoPage() {
  return (
    <div>
      <Sidebar />
      <Header />
      <section className="watch-video">
        <Video />
      </section>
      <Comments />
    </div>
  );
}
