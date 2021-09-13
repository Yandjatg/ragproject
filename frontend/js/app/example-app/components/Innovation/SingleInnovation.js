import React from 'react';
import { useSelector } from 'react-redux';

const SingleInnovation = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singleInnovation = data.data.filter((item) => item.id == id);
  const innovationData = singleInnovation[0];

  return (
    <div>
      <p>{innovationData.description}</p>
    </div>
  );
};
export default SingleInnovation;
