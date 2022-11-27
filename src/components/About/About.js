import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>About pages us</h2>
      <p>login email: {user?.email}</p>
    </div>
  );
};

export default About;
