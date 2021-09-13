import React, { useState, useEffect, Component } from 'react';
import Portrait from '../app/example-app/components/Portrait/index';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';

const PortraitPage = () => {
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
      <Portrait />
      <Footer />
    </>
  );
};

export default PortraitPage;
