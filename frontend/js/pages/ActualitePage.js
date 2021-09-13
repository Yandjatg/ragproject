import React, { useState, useEffect, Component } from 'react';

import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import Actuilite from '../app/example-app/components/Actualite/index';
const ActualitePage = () => {
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
      <Actuilite />
      <Footer />
    </>
  );
};

export default ActualitePage;
