import React, { useState, useEffect, Component } from 'react';

import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import Innovation from '../app/example-app/components/Innovation/index';
const InnovationPage = () => {
  // const dispatch = useDispatch();
  // const restCheck = useSelector((state) => state.restCheck);
  // useEffect(() => {
  //   const action = creators.fetchRestCheck();
  //   dispatch(action);
  // }, [dispatch]);

  // const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <NavBar />
      <Innovation />
      <Footer />
    </>
  );
};

export default InnovationPage;
