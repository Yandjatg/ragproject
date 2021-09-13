import React from 'react';
import { useSelector } from 'react-redux';
import { Acceuil } from './slice/types';
const SingleActualite = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singleActualite = data.data.filter((item) => item.id == id);
  const accueilData = singleActualite[0];
  console.log(accueilData);
  console.log(accueilData.id);
  return (
    <div>
      <p>{accueilData.description}</p>
    </div>
  );
};
export default SingleActualite;
