import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import diet from "../../assets/diet.svg";
import {
  StyledBg,
  StyledCard,
  StyledHeader,
  StyledDetails,
  StyledDetailText,
} from "./Detail.styled";

const CardDetail = () => {
  const location = useLocation();
  const ingredients = location.state.ingredientLines;
  const RecipeDetail = location.state.recipe;
  const nutrient = location.state.nutrients;

  //console.log(ingredients);
  console.log(RecipeDetail);
  return (
    <StyledBg>
      <NavBar />
      <StyledCard>
        <StyledHeader>
          <h1>{RecipeDetail.label.toUpperCase()}</h1>
          <img src={diet} alt="diet.svg" />
        </StyledHeader>
        <StyledDetails>
          <StyledDetailText>
            <h2>NUTRIENTS</h2>
            <ul>
              {nutrient?.map((nutrient) => (
                <li>
                  {nutrient.label} : {Math.round(nutrient.quantity)}{" "}
                  {nutrient.unit}
                </li>
              ))}
            </ul>
          </StyledDetailText>
          <img src={RecipeDetail.image} alt="foodimg" />
          <StyledDetailText>
            <h2>INGREDIENTS</h2>
            <ul>
              {ingredients?.map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </StyledDetailText>
        </StyledDetails>
      </StyledCard>
    </StyledBg>
  );
};

export default CardDetail;
