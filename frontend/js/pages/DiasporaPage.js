import React, { useState, useEffect, Component } from 'react';

import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import Diaspora from '../app/example-app/components/Diaspora/index';
const DiasporaPage = () => {
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
      <Diaspora />
      <Footer />
    </>
  );
};

export default DiasporaPage;
