import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInterviewData } from './slice';
import InterviewItem from './interviewItem';
export const Interview = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.interview);

  React.useEffect(() => {
    dispatch(fetchInterviewData())
      .unwrap()
      .then((response) => {
        if (fetchInterviewData.fulfilled.match(response))
          dispatch({
            type: 'interview/fetchInterviewInfoRequested/fulfilled',
            payload: response.data,
          });
      })
      .catch((error) => {
        dispatch({
          type: 'interview/fetchInterviewInfoRequested/rejected',
          payload: error.message,
        });
      });
  }, []);
  return (
    <Div>
      <Actualites>
        {data.data &&
          data.data.map((interview) => <InterviewItem key={interview.id} interview={interview} />)}
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
export default Interview;
