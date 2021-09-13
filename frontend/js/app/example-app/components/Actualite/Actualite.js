import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ActualiteItem from './actualityItem';
import { fetchActualiteData } from './slice';

const Actualite = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.actualite);

  React.useEffect(() => {
    dispatch(fetchActualiteData());
    dispatch(fetchActualiteData())
      .unwrap()
      .then((response) => {
        if (fetchActualiteData.fulfilled.match(response))
          dispatch({
            type: 'actualite/fetchActualiteInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'actualite/fetchActualiteInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);

  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((actualite) => <ActualiteItem key={actualite.id} actualite={actualite} />)}
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

export default Actualite;
