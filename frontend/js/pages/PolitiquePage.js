import React, { useState, useEffect, Component } from 'react';

import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import Politique from '../app/example-app/components/Politique/index';
const PolitiquePage = () => {
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
      <Politique />
      <Footer />
    </>
  );
};

export default PolitiquePage;
