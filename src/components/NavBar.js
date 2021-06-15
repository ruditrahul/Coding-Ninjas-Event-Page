import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavBar.css";

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar-div">
      <Navbar color="dark" light expand="lg" sticky="top">
        <img
          src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
          alt="coding-ninja-logo"
          style={{ height: "50px", width: "70px", marginLeft: "15px" }}
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="mr-auto"
            navbar
            style={{ marginLeft: "30px", marginTop: "5px" }}
          >
            <NavItem>
              <NavLink href="https://www.codingninjas.com/v2">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.codingninjas.com/v2/courses">
                Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://codezen.codingninjas.com/">
                Practice
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://www.codingninjas.com/v2/events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://campus.codingninjas.com/?_ga=2.11850547.665133868.1623422627-987125433.1623422626">
                Campus Ninja
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://codingninjas.com/blog?_ga=2.11850547.665133868.1623422627-987125433.1623422626">
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://careercamp.codingninjas.com/?utm_source=codingninjas&utm_medium=top_navigation&utm_campaign=landing_header&_ga=2.11850547.665133868.1623422627-987125433.1623422626">
                <img
                  src="https://files.codingninjas.in/group-4450-9643.svg"
                  alt="career-camp-img"
                />
              </NavLink>
            </NavItem>
          </Nav>
          <div style={{ marginTop: "5px" }}>
            <Button variant="contained" className="login-btn">
              Login
            </Button>
            <Button variant="contained" className="enroll-btn">
              Enroll Now
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
