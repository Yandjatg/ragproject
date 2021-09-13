import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import InnovationItem from './innovationItem';
import { fetchInnovationData } from './slice';
const Innovation = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.innovation);

  React.useEffect(() => {
    dispatch(fetchInnovationData())
      .unwrap()
      .then((response) => {
        if (fetchInnovationData.fulfilled.match(response))
          dispatch({
            type: 'innovation/fetchInnovationInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'innovation/fetchInnovationInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);
  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((innovation) => (
            <InnovationItem key={innovation.id} innovation={innovation} />
          ))}
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
export default Innovation;
