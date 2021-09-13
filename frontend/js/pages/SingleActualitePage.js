import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleAcceuil from '../app/example-app/components/Actualite/SingleActualite';

const SingleActualitePage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleAcceuil id={id} />
      <Footer />
    </>
  );
};
export default SingleActualitePage;
