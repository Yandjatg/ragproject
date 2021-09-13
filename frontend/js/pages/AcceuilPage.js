import React, { useState, useEffect, Component } from 'react';
import Acceuil from '../app/example-app/components/Accueil/index';
import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';

const AcceuilPage = () => {
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
      <Acceuil />
      <Footer />
    </>
  );
};

export default AcceuilPage;
