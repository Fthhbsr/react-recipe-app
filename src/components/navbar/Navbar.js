import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const handleClick = () => {
    sessionStorage.clear();
  };

  return (
    <div>
      <Navbar bg="success" variant="dark">
        <Container className="row justify-content-between px-5">
          <Navbar.Brand href="/home">RECIPE APP</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="me-4" href="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link href="https://github.com/Fthhbsr">GITHUB</Nav.Link>

            <Nav.Link className="ms-4" href="/" onClick={handleClick}>
              LOGOUT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
