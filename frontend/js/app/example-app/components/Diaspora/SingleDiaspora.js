import React from 'react';
import { useSelector } from 'react-redux';

const SingleDiaspora = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singleDiaspora = data.data.filter((item) => item.id == id);
  const diasporaData = singleDiaspora[0];

  return (
    <div>
      <p>{diasporaData.description}</p>
    </div>
  );
};
export default SingleDiaspora;
