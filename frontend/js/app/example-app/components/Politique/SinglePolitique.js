import React from 'react';
import { useSelector } from 'react-redux';

const SinglePolitique = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singlePolitique = data.data.filter((item) => item.id == id);
  const politiqueData = singlePolitique[0];

  return (
    <div>
      <p>{politiqueData.description}</p>
    </div>
  );
};
export default SinglePolitique;
