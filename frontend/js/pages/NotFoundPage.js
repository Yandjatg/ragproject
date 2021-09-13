import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
//import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <h1>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </h1>
      <NavBar />
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <p>Page not found.</p>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
export default NotFoundPage;
