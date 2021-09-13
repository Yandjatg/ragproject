import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleActualite from '../app/example-app/components/Accueil/SingleActualite';

const SingleAcceuilPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleActualite id={id} />
      <Footer />
    </>
  );
};
export default SingleAcceuilPage;
