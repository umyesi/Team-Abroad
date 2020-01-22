import React from "react";

const Highlights = () => {
  return (
    <div className="highlights container-fluid">
      <div className="row align-items-center first-highlight-container">
        <iframe
          className="col-lg-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B-8fXb8tts0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="col-lg-6  highlight-description">
          <h2>French courses in France with focus on communication</h2>
          <p>
            All courses in all levels focus on communication. You will speak
            French from the first day on. After all necessary grammar
            explanations we practice by speaking in class. Even outside of
            class: with our innovative Outdoor Classes you will practice what
            you learned in class in real environments in the city. Learn French
            with all your senses!{" "}
          </p>
        </div>
      </div>
      <div className="row align-items-center second-highlight-container">
        <div className="col-lg-6 highlight-description">
          <h2>A language trip full of experiences</h2>
          <p>
            Meet new friends from your age from around the world with your same
            interests. Understanding the culture of a country is just as
            important as learning the language. We organize activities every
            week like guided tours in the city, hiking days, theatre nights...
            Experience Paris like a local with new friends.
          </p>
        </div>

        <iframe
          className="col-lg-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e_M807HAe2c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Highlights;
