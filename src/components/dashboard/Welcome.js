import React from "react";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome-header">
        Welcome to <span className="team">Team</span>{" "}
        <span className="abroad">Abroad</span>{" "}
      </h2>
      <hr />
      <div className="container welcome-content">
        <p>
          {" "}
          Team Abroad, based in Paris, specialises in school trips, study
          holidays and work experience for groups of International students
          coming to Paris.
        </p>

        <p>
          Our study programmes aim to develop students’ enthusiasm and interest
          in learning English through a system which combines education,
          cultural immersion and entertainment.
        </p>

        <p>
          By hiring excellent English speaking teachers and tour guides and
          arranging visits to the most important cultural locations and tourist
          attractions, we aim to ensure the students have a memorable and
          worthwhile experience..
        </p>
      </div>
    </div>
  );
};
export default Welcome;
