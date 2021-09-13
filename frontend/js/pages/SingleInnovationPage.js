import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleInnovation from '../app/example-app/components/Innovation/SingleInnovation';

const SingleInnovationPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleInnovation id={id} />
      <Footer />
    </>
  );
};
export default SingleInnovationPage;
