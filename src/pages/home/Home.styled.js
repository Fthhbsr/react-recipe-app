import styled from "styled-components";
import home from "../../assets/home.jpg";

export const StyledHome = styled.main`
  background-image: url(${home});
  /* width: 100vw; */
  /* height: auto; */
  background-size: cover;
  /* background-repeat: ; */
  /* background-color: rgb(0, 213, 250); */

  .mealImage {
    text-align: center;
    img {
      background-color: rgba(0, 0, 0, 0.05);
      height: 64vh;
    }
  }
`;

export const StyledCard = styled.div`
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.6);
  background-color: rgb(31, 29, 29);
  border-radius: 2rem;
  &:hover {
    /* opacity: 0.9; */
    transform: scale(1.02);
  }
`;
