import React from 'react';
import { useSelector } from 'react-redux';

const SingleInterview = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singleInterview = data.data.filter((item) => item.id == id);
  const interviewData = singleInterview[0];

  return (
    <div>
      <p>{interviewData.description}</p>
    </div>
  );
};
export default SingleInterview;
