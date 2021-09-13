import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleStartup from '../app/example-app/components/Startup/SingleStartup';

const SingleStartupPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleStartup id={id} />
      <Footer />
    </>
  );
};
export default SingleStartupPage;
