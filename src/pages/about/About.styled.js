import styled from "styled-components";
import home from "../../assets/home.jpg";

export const StyledBg = styled.div`
  background-image: url(${home});
  background-size: cover;
`;

export const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 87.8vh;
  img {
    width: 35%;
    margin-bottom: 2rem;
  }
  div {
    padding: 2rem;
    border: 0.3rem outset chocolate;
    border-radius: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: aliceblue;
  }
`;
