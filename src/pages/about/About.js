import NavBar from "../../components/navbar/NavBar";
import coding from "../../assets/coding.svg";
import { StyledAbout, StyledBg } from "./About.styled";

const About = () => {
  return (
    <StyledBg>
      <NavBar />
      <StyledAbout>
        <img src={coding} alt="coding.svg" />
        <div>
          <h2>Hi I'm Fatih</h2>
          <p>I'm FullStack Developer.I designed this site using REACT.</p>
        </div>
      </StyledAbout>
    </StyledBg>
  );
};

export default About;
