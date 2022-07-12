import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const CardDetail = () => {
  const location = useLocation();
  const RecipeDetail = location.state.recipe;
  console.log(RecipeDetail);
  return (
    <div>
      <NavBar />
      CardDetail
    </div>
  );
};

export default CardDetail;
