import React from 'react';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import SingleInterview from '../app/example-app/components/Interview/SingleInterview';

const SingleInterviewPage = ({ match }) => {
  const id = match.params.id;
  return (
    <>
      <NavBar />
      <SingleInterview id={id} />
      <Footer />
    </>
  );
};
export default SingleInterviewPage;
