import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/carddetail", { state: { recipe } });
  };
  //   console.log(recipe);
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Text>{recipe.label}</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Button
              onClick={() => handleClick()}
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW MORE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default RecipeCard;
