import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import StartupItem from './startupItem';
import { fetchStartupData } from './slice';
export const Startup = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.startup);

  React.useEffect(() => {
    dispatch(fetchStartupData())
      .unwrap()
      .then((response) => {
        if (fetchStartupData.fulfilled.match(response))
          dispatch({
            type: 'startup/fetchStartupInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'startup/fetchStartupInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);
  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((startup) => <StartupItem key={startup.id} startup={startup} />)}
      </Actualites>
    </Div>
  );
};
const Div = styled.div``;
const Actualites = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  /* width: 100%; */
  margin: 50px;
`;
export default Startup;
