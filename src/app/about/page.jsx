import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Link from "next/link";

// Constante pentru datele statice
const whyChooseUsData = [
  {
    icon: "fas fa-graduation-cap",
    count: "+10k",
    text: "online courses",
  },
  {
    icon: "fas fa-user-graduate",
    count: "+40k",
    text: "brilliant students",
  },
  {
    icon: "fas fa-chalkboard-user",
    count: "+2k",
    text: "expert tutors",
  },
  { icon: "fas fa-briefcase", count: "100%", text: "job placement" },
];

const reviewsData = Array.from({ length: 6 }, (_, index) => index + 1);

// Componentă separată pentru secțiunea "why choose us?"
const WhyChooseUsSection = () => (
  <section className="about">
    <div className="row">
      <div className="image">
        <img src="images/about-img.svg" alt="" />
      </div>
      <div className="content">
        <h3>why choose us?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum
          quasi illo? Distinctio expedita commodi, nemo a quam error repellendus
          sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat
          tenetur.
        </p>
        <Link href="/courses" className="inline-btn">
          our courses
        </Link>
      </div>
    </div>

    <div className="box-container">
      {whyChooseUsData.map((item, index) => (
        <div className="box" key={index}>
          <i className={item.icon}></i>
          <div>
            <h3>{item.count}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Componentă separată pentru secțiunea "reviews"
const ReviewsSection = () => (
  <section className="reviews">
    <h1 className="heading">Students reviews</h1>
    <div className="box-container">
      {reviewsData.map((index) => (
        <div className="box" key={index}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed
            ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis
            fuga. Eligendi eaque molestiae modi?
          </p>
          <div className="student">
            <img src={`images/pic-${index}.jpg`} alt="" />
            <div>
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Componenta principală pentru pagina "About"
const About = () => (
  <div>
    <Sidebar />
    <Header />
    <WhyChooseUsSection />
    <ReviewsSection />
  </div>
);

export default About;
