import React, { useState, useEffect, Component } from 'react';

import NavBar from '../app/example-app/components/NavBar/index';
import Footer from '../app/example-app/components/Footer/index';
import Inscrir from '../app/example-app/components/Inscrir/index';
import styled from 'styled-components';
const InscrirPage = () => {
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
      <Wrapper>
        <Inscrir />
      </Wrapper>

      <Footer />
    </>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

export default InscrirPage;
