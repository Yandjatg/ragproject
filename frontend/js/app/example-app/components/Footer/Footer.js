import * as React from 'react';
import { Card, NavItem, NavLink, Nav, Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
export const Footer = () => {
  return (
    <FOOTER>
      <Card className="p-3">
        <footer className="blockquote-footer">
          <Container>
            <Sociaux>
              <Row className="row-grid align-items-center my-md">
                <Col className="text-lg-center btn-wrapper" lg="10">
                  <Social>
                    <SocialIcon url="https://www.facebook.com/Ayano.of.Peace/" />
                  </Social>

                  <Social>
                    <SocialIcon url="https://twitter.com/jaketrent" />
                  </Social>

                  <Social>
                    <SocialIcon url="https://www.linkedin.com/in/yandja-lalle-a931a01a7/" />
                  </Social>

                  <Social>
                    <SocialIcon url="https://google.com" />
                  </Social>
                </Col>
              </Row>
            </Sociaux>
            <hr />
            <br />

            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{' '}
                  <a href="https://www.facebook.com/Ayano.of.Peace/" target="blank">
                    Copyright
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink href="" target="_blank">
                      Start with why
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="" target="_blank">
                      A Propos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="" target="_blank">
                      Blog
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </Card>
    </FOOTER>
  );
};
export const FOOTER = styled(Card)`
  width: 100%;
  bottom: 0;
`;
const Social = styled.span`
  padding-left: 7px;
`;

const Sociaux = styled.div`
  padding-left: 400px;
`;
export default Footer;
