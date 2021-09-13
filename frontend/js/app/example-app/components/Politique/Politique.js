import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolitiqueData } from './slice';
import PolitiqueItem from './politiqueItem';

export const Politique = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.politique);

  React.useEffect(() => {
    dispatch(fetchPolitiqueData())
      .unwrap()
      .then((response) => {
        if (fetchPolitiqueData.fulfilled.match(response))
          dispatch({
            type: 'politique/fetchPolitiqueInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'politique/fetchPolitiqueInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);
  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((politique) => <PolitiqueItem key={politique.id} politique={politique} />)}
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
export default Politique;
