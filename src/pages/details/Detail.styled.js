import styled from "styled-components";
import home from "../../assets/home.jpg";

export const StyledBg = styled.div`
  background-image: url(${home});
  /* width: 100vw; */

  background-size: cover;
`;

export const StyledCard = styled.main`
  /* border: 2px solid red; */
  padding: 0.78rem 0;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: chocolate;

  padding: 1rem;
  img {
    width: 10rem;
  }
`;

export const StyledDetails = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  align-items: center;
  h2 {
    color: darkgoldenrod;
  }
  img {
    width: 22rem;
    height: 20rem;
    outline: 0.5rem outset chocolate;
  }
`;

export const StyledDetailText = styled.div`
  width: 30vw;
  text-align: center;
  ul {
    list-style-type: circle;
    list-style-position: inside;
    border: 0.3rem outset chocolate;
    border-radius: 2rem;
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
