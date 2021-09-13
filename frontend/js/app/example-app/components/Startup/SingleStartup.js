import React from 'react';
import { useSelector } from 'react-redux';

const SingleStartup = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singleStartup = data.data.filter((item) => item.id == id);
  const startupData = singleStartup[0];

  return (
    <div>
      <p>{startupData.description}</p>
    </div>
  );
};
export default SingleStartup;
