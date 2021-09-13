import * as React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from './logo_black.jpg';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <Wrapper>
      <Navbar fixed="top" className="navbar-horizontal navbar-dark bg-default" expand="lg">
        <Logo href="/">
          <img src={logo} height="80px" className="d-inline-block align-top" alt="Acceuil" />
        </Logo>
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Acceuil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/actualites">
              Actualités
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/portraits">
              Portrait
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/startups">
              Startups
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/diasporas">
              Diaspora
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/innovations">
              Innovation et Technologies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/politiques">
              Politiques
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/api/rag/interviews">
              Interview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/signup">
              S'inscrir
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Se Connecter
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Wrapper>
  );
};
// export const Wrapper = styled.div`
//   padding-left: 220px;
//   display: flex;
//   background-color: #0c4b33;
// `;
export const Wrapper = styled.nav`
  display: flex;
  padding-left: 220px;
  /*  background-color: #0c4b33;*/
  background-color: #000000;
`;
const Logo = styled(Navbar.Brand)`
  margin-left: -160px;
  padding-right: 140px;
`;
export default NavBar;
