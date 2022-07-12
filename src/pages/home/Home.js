import { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState("Breakfast");
  const [results, setResults] = useState([]);

  const getData = async () => {
    const APP_ID = "55fa3aee";
    const APP_KEY = "97fcbfce23d868f0c54e6a5aa47bfadd";
    const { data } = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    );
    setResults(data.hits);
    // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=55fa3aee&app_key=97fcbfce23d868f0c54e6a5aa47bfadd&mealType=Breakfast
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setSearch("");
    // console.log(search);
    // console.log(meal);
    console.log(results);
  };

  return (
    <div>
      <NavBar />
      <div className="mx-auto">
        <h1 className="text-center">FOOD APP</h1>
        <div className="mx-auto">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col as={Col} md="3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Col>
              <Col as={Col} md="2">
                <Button type="submit">Search</Button>
              </Col>
              <Col as={Col} md="3">
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
            </Row>
          </Form>
        </div>
      </div>

      <Container>
        <Row xs={2} md={3} lg={4}>
          {results?.map((data, index) => (
            <div key={index}>
              <RecipeCard recipe={data.recipe} />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
