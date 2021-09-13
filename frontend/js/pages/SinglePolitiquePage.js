import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SinglePolitique from '../app/example-app/components/Politique/SinglePolitique';

const SinglePolitiquePage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SinglePolitique id={id} />
      <Footer />
    </>
  );
};
export default SinglePolitiquePage;
