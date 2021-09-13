import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const SinglePortrait = ({ id }) => {
  const { data } = useSelector((state) => state.actualite);
  const singlePortrait = data.data.filter((item) => item.id == id);
  const portraitData = singlePortrait[0];
  console.log(portraitData);
  return (
    <div>
      <Image>
        <Img src={portraitData.image} />
      </Image>
      <p>{portraitData.description}</p>
    </div>
  );
};

const Image = styled.div`
  background-color: #000;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  display: block;
`;
export default SinglePortrait;
