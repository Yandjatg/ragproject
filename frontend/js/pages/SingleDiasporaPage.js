import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleDiaspora from '../app/example-app/components/Diaspora/SingleDiaspora';

const SingleDiasporaPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleDiaspora id={id} />
      <Footer />
    </>
  );
};
export default SingleDiasporaPage;
