import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import { Card } from "react-bootstrap";

const CardDetail = () => {
  const location = useLocation();
  const RecipeDetail = location.state.recipe;
  console.log(RecipeDetail);
  return (
    <div>
      <NavBar />
      <Card>
        <Card.Body>
          <Card.Text>{RecipeDetail.label}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={RecipeDetail.image} />
      </Card>
    </div>
  );
};

export default CardDetail;
