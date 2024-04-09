import React from 'react';

import './index.css'; // Import CSS file for styling

const Home = () => {
    const homesection = () => {
        return (
          <div className="content" id="home">
            <h1>Welcome to the Fullstack Development Guide!</h1>
            <p>
              Fullstack development involves working on both the front-end and
              back-end of web applications. It requires knowledge of various
              technologies such as HTML, CSS, JavaScript for the front-end, and
              databases, server-side programming languages (like Node.js), and
              frameworks (like Express.js) for the back-end.
            </p>
            <p>
              React is a popular front-end library for building user interfaces. It
              allows developers to create reusable UI components and efficiently
              manage the state of their applications. React is often used in
              combination with other libraries and frameworks to build fullstack
              applications.
            </p>
          </div>
        );
      };
      const about = () => {
        return (
          <div className="content" id="about">
            <h2>About Us</h2>
            <p>
              We are a team of experienced fullstack developers passionate about
              building scalable and efficient web applications. Our mission is to
              provide resources and guidance to aspiring developers looking to master
              the art of fullstack development.
            </p>
          </div>
        );
      };

  return (
   
      <div className="homecontainer">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
          </ul>
        </nav>

       {homesection()}
       {about()}
       
      </div>
   
  );
};




export default Home;
