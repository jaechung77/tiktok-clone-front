import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Left = () => {
	return (
<>
  <Navbar bg="none">
    <Container>
      <Navbar.Brand href="#home">For You</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Container>
      <Navbar.Brand>Following</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
	)
}

export default Left
