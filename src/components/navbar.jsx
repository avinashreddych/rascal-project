import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/home.css";


function NavBar() {
    const navStyle = {
        color: "white",
        textDecoration:"none"
    };
    return (
        <>

        <Navbar sticky="top" expand="lg" bg="blue"  variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    rAScal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse-id" />
                <Navbar.Collapse id="navbar-collapse-id">
                    <Nav className="ms-auto">
                        <Nav.Link href="/courses" to="/courses" style={navStyle}>
                            {/* <Link style={navStyle} to="/courses">Courses</Link>   */}
                            Courses
                            {/* TODO: Change to inactive link in Home page and active link in Courses Page */}
                            </Nav.Link> 
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
    );
}


export default NavBar;