import Link from "next/link";
import React from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const SavePlaylistForm = () => {
  return (
    <form action="" method="post" className="save-playlist">
      <button type="submit">
        <i className="far fa-bookmark"></i> <span>save playlist</span>
      </button>
    </form>
  );
};

const PlaylistThumbnail = () => {
  return (
    <div className="thumb">
      <img src="/images/thumb-1.png" alt="" />
      <span>10 videos</span>
    </div>
  );
};

const TutorDetails = () => {
  return (
    <div className="tutor">
      <img src="/images/pic-2.jpg" alt="" />
      <div>
        <h3>john deo</h3>
        <span>21-10-2022</span>
      </div>
    </div>
  );
};

const PlaylistDetails = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <section className="playlist-details">
        <h1 className="heading">playlist details</h1>
        <div className="row">
          <div className="column">
            <SavePlaylistForm />
            <PlaylistThumbnail />
          </div>
          <div className="column">
            <TutorDetails />
            <div className="details">
              <h3>complete HTML tutorial</h3>
              <p>
                Explore the fundamentals of HTML with this concise video
                tutorial. Learn how to structure your web content, create links,
                and leverage HTML tags to build the foundation of your web
                pages. Whether you're a beginner or looking to refresh your
                skills, dive into the essentials of HTML in this insightful
                video.
              </p>
              <Link href="teachers/profile" className="inline-btn">
                view profile
              </Link>
            </div>
          </div>
        </div>
        <section className="playlist-videos">
          <h1 className="heading">playlist videos</h1>

          <div className="box-container">
            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-1.png" alt="" />
              <h3>complete HTML tutorial (part 01)</h3>
            </Link>

            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-2.png" alt="" />
              <h3>complete HTML tutorial (part 02)</h3>
            </Link>

            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-3.png" alt="" />
              <h3>complete HTML tutorial (part 03)</h3>
            </Link>

            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-4.png" alt="" />
              <h3>complete HTML tutorial (part 04)</h3>
            </Link>

            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-5.png" alt="" />
              <h3>complete HTML tutorial (part 05)</h3>
            </Link>

            <Link className="box" href="/playlist/watch">
              <i className="fas fa-play"></i>
              <img src="/images/post-1-6.png" alt="" />
              <h3>complete HTML tutorial (part 06)</h3>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PlaylistDetails;
