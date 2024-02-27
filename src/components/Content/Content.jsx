import React from "react";

const QuickOption = ({ title, items }) => (
  <div className="box">
    <h3 className="title">{title}</h3>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <p className="likes">
          {item.label} : <span>{item.value}</span>
        </p>
        <a href={item.link} className="inline-btn">
          {item.linkLabel}
        </a>
      </React.Fragment>
    ))}
  </div>
);

const CategoryBox = ({ title, categories }) => (
  <div className="box">
    <h3 className="title">{title}</h3>
    <div className="flex">
      {categories.map((category, index) => (
        <a key={index} href={category.link}>
          <i className={category.icon}></i>
          <span>{category.name}</span>
        </a>
      ))}
    </div>
  </div>
);

const Content = () => {
  const quickOptions = [
    {
      title: "likes and comments",
      items: [
        { label: "total likes", value: 25, link: "#", linkLabel: "view likes" },
        {
          label: "total comments",
          value: 12,
          link: "#",
          linkLabel: "view comments",
        },
        {
          label: "saved playlists",
          value: 4,
          link: "#",
          linkLabel: "view playlists",
        },
      ],
    },
  ];

  const topCategories = [
    { name: "development", icon: "fas fa-code", link: "#" },
    { name: "business", icon: "fas fa-chart-simple", link: "#" },
    { name: "design", icon: "fas fa-pen", link: "#" },
    { name: "marketing", icon: "fas fa-chart-line", link: "#" },
    { name: "music", icon: "fas fa-music", link: "#" },
    { name: "photography", icon: "fas fa-camera", link: "#" },
    { name: "software", icon: "fas fa-cog", link: "#" },
    { name: "science", icon: "fas fa-vial", link: "#" },
  ];

  const popularTopics = [
    { name: "HTML", icon: "fab fa-html5", link: "#" },
    { name: "CSS", icon: "fab fa-css3", link: "#" },
    { name: "javascript", icon: "fab fa-js", link: "#" },
    { name: "react", icon: "fab fa-react", link: "#" },
    { name: "PHP", icon: "fab fa-php", link: "#" },
    { name: "bootstrap", icon: "fab fa-bootstrap", link: "#" },
  ];

  const tutorBox = {
    title: "become a tutor",
    description:
      "Do you want to become a tutor? Press the the button below to get started!",
    link: "/teachers",
    linkLabel: "get started",
  };

  return (
    <div>
      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          {quickOptions.map((option, index) => (
            <QuickOption
              key={index}
              title={option.title}
              items={option.items}
            />
          ))}

          <CategoryBox title="top categories" categories={topCategories} />
          <CategoryBox title="popular topics" categories={popularTopics} />

          <div className="box">
            <h3 className="title">{tutorBox.title}</h3>
            <p className="tutor">{tutorBox.description}</p>
            <a href={tutorBox.link} className="inline-btn">
              {tutorBox.linkLabel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
