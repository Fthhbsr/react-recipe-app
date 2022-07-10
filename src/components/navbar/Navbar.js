import { NavLink } from "react-router-dom";
//import logo from "../../assets/home.svg";
//import "./Navbar.css";
import { Container, Nav } from "react-bootstrap";

const Navbar = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     sessionStorage.clear();
  //     navigate("/");
  //   };

  return (
    <div>
      <Navbar bg="success" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/home">Clarusway</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink
              to="/"
              // onClick={() => handleClick()}
            >
              Logout
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar;
