import { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { StyledHome } from "./Home.styled";
import home from "../../assets/home.svg";
import meal2 from "../../assets/meal2.svg";

const Home = () => {
  const [search, setSearch] = useState();
  const [meal, setMeal] = useState("Breakfast");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  //const [loading, setLoading] = useState(true);

  const getData = async () => {
    const APP_ID = "55fa3aee";
    const APP_KEY = "97fcbfce23d868f0c54e6a5aa47bfadd";
    const { data } = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    );
    setResults(data.hits);
    setShow(true);
    // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=55fa3aee&app_key=97fcbfce23d868f0c54e6a5aa47bfadd&mealType=Breakfast
  };

  // useEffect(() => {
  //   search && getData();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();

    //setSearch("");
    // console.log(search);
    // console.log(meal);
    //console.log(results);
  };

  return (
    <StyledHome>
      <NavBar />
      <div className="mx-auto">
        <div className="d-flex justify-content-center p-2">
          <img style={{ width: "75px" }} src={home} alt="home.svg" />
          <h1 className="text-center">RECIPE APP</h1>
        </div>

        <div className="w-25 mx-auto border p-3">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col md="5">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Col>

              <Col md="5">
                <Form.Select
                  aria-label="Default select example"
                  value={meal}
                  onChange={(e) => setMeal(e.target.value)}
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                  <option value="Teatime">Teatime</option>
                </Form.Select>
              </Col>
              <Col md="2">
                <Button className="btn-warning" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      {show ? (
        <Container>
          <Row xs={2} md={3} lg={5} className="d-flex justify-content-center">
            {results?.map((data, index) => (
              <div key={index}>
                <RecipeCard recipe={data.recipe} />
              </div>
            ))}
          </Row>
        </Container>
      ) : (
        <div className="mealImage">
          <img src={meal2} alt="home" />
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
