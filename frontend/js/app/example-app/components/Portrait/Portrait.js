import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortraitData } from './slice';
import PortraitItem from './portraitItem';
export const Portrait = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.portrait);

  React.useEffect(() => {
    dispatch(fetchPortraitData())
      .unwrap()
      .then((response) => {
        if (fetchPortraitData.fulfilled.match(response))
          dispatch({
            type: 'portrait/fetchPortraitInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'portrait/fetchPortraitInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);
  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((portrait) => <PortraitItem key={portrait.id} portrait={portrait} />)}
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
export default Portrait;
