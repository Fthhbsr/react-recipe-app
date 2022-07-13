//import { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "./Home.styled";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  //const [nutrients, setNutrients] = useState();

  const handleClick = () => {
    const { CA, CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT, SUGAR } =
      recipe.totalNutrients;
    const nutrients = [CA, CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT, SUGAR];
    const { ingredientLines } = recipe;

    console.log(nutrients);
    navigate("/carddetail", {
      state: {
        recipe,
        ingredientLines,
        nutrients,
      },
    });
  };
  //console.log(recipe.ingredientLines);
  return (
    <StyledCard>
      <Col className="mb-4 text-center">
        <Card
          style={{
            minHeight: "380px",
          }}
          className="card p-2 bg-dark text-light"
        >
          <Card.Body>
            <Card.Text className="h6">{recipe.label}</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={recipe.image} className="rounded" />
          <Card.Body>
            <Button
              className="btn-warning"
              onClick={() => handleClick()}
              style={{ borderRadius: "3rem" }}
              variant="primary"
            >
              VIEW MORE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </StyledCard>
  );
};

export default RecipeCard;
