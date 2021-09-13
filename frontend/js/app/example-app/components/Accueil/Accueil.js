import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ActualiteItem from './actualityItem';
import { fetchAcceuilData } from './slice';

const Accueil = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.acceuil);

  React.useEffect(() => {
    dispatch(fetchAcceuilData())
      .unwrap()
      .then((response) => {
        if (fetchAcceuilData.fulfilled.match(response))
          dispatch({
            type: 'acceuil/fetchAcceuilInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'acceuil/fetchAcceuilInfoRequested/rejected',
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

export default Accueil;
