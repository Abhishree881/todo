import React from "react";
// import Footer from "../components/Footer";
import "../assets/styling/about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutHead">
        <h2>
          What is a todo List? The definition is a simple one. It's a list of
          tasks you need to complete or things that you want to do. Most
          typically, they're organised in order of priority. Traditionally,
          they're written on a piece of paper or post it notes and act as a
          memory aid. As technology has evolved we have been able to create a
          todo lists with excel spreadsheets, word documents, email lists, todo
          list apps, Microsoft to do and google to do list to name a few. You
          can use a to do list in your home and personal life, or in the
          workplace. Having a list of everything you need to do written down in
          one place means you shouldn't forget anything important. By
          prioritising the tasks in the list you plan the order in which you're
          going to do them and can quickly see what needs your immediate
          attention and what tasks you can leave until a little later.
        </h2>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
