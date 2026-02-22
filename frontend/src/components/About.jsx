import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            At our restaurant, we’re passionate about turning everyday dining
            into something special. From thoughtfully prepared dishes to a
            welcoming atmosphere, everything we do is centered around delivering
            flavor, freshness, and comfort. We combine high-quality ingredients
            with creative recipes to bring you meals that satisfy both cravings
            and curiosity. More than just a place to eat, we aim to be a space
            where friends meet, families bond, and moments are shared.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
