import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SinglePortrait from '../app/example-app/components/Portrait/SinglePortrait';

const SinglePortraitPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SinglePortrait id={id} />
      <Footer />
    </>
  );
};
export default SinglePortraitPage;
