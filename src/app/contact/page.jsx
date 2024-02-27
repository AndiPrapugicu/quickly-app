import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const ContactForm = () => (
  <form action="" method="post">
    <h3>get in touch</h3>
    <input
      type="text"
      placeholder="enter your name"
      name="name"
      required
      maxLength="50"
      className="box"
    />
    <input
      type="email"
      placeholder="enter your email"
      name="email"
      required
      maxLength="50"
      className="box"
    />
    <input
      type="number"
      placeholder="enter your number"
      name="number"
      required
      maxLength="50"
      className="box"
    />
    <textarea
      name="msg"
      className="box"
      placeholder="enter your message"
      required
      maxLength="1000"
      cols="30"
      rows="10"
    ></textarea>
    <input
      type="submit"
      value="send message"
      className="inline-btn"
      name="submit"
    />
  </form>
);

const InfoBox = ({ icon, title, addresses }) => (
  <div className="box">
    <i className={icon}></i>
    <h3>{title}</h3>
    {addresses.map((address, index) => (
      <a key={index} href={address.link}>
        {address.text}
      </a>
    ))}
  </div>
);

const Contact = () => (
  <div>
    <Sidebar />
    <Header />
    <section className="contact">
      <div className="row">
        <div className="image">
          <img src="images/contact-img.svg" alt="" />
        </div>
        <ContactForm />
      </div>

      <div className="box-container">
        <InfoBox
          icon="fas fa-phone"
          title="phone number"
          addresses={[
            { link: "tel:1234567890", text: "123-456-7890" },
            { link: "tel:1112223333", text: "111-222-3333" },
          ]}
        />

        <InfoBox
          icon="fas fa-envelope"
          title="email address"
          addresses={[
            {
              link: "mailto:andiprapugicu@gmail.com",
              text: "andiprapugicu@gmail.com",
            },
            {
              link: "mailto:andiprapugicu@gmail.com",
              text: "andiprapugicu@gmail.com",
            },
          ]}
        />

        <InfoBox
          icon="fas fa-map-marker-alt"
          title="office address"
          addresses={[{ link: "#", text: "Romania, Timisoara" }]}
        />
      </div>
    </section>
  </div>
);

export default Contact;
