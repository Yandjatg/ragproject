import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import DiasporaItem from './diasporaItem';
import { fetchDiaporaData } from './slice';
export const Diaspora = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.diaspora);

  React.useEffect(() => {
    dispatch(fetchDiaporaData())
      .unwrap()
      .then((response) => {
        if (fetchDiaporaData.fulfilled.match(response))
          dispatch({
            type: 'diaspora/fetchDiasporaInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'diaspora/fetchDiasporaInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);

  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((diaspora) => <DiasporaItem key={diaspora.id} diaspora={diaspora} />)}
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
export default Diaspora;
