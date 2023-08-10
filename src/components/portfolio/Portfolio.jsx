import React from "react";
import "./portfolio.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";

const data = [
  {
    id: 1,
    image: project1,
    title: "PortFolio Website",
    github: "https://github.com/Aditya858306/Portfolio",
    // demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },

  {
    id: 2,
    image: project2,
    title: "Budget-Tracker",
    github: "https://github.com/Aditya858306/Expense-Tracker-Mern",
    demo: "https://dribbble.com/shots/18155689-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 3,
    image: project3,
    title: "To-Do List",
    github: "https://github.com/Aditya858306/TodoList",
    demo: "https://dribbble.com/shots/21590546-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>

              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
