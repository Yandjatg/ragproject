import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './CourseItem.css';

const ActualiteItem = (Props) => {
  const actualite = Props.actualite;
  return (
    <Course>
      <Image>
        <Img src={actualite.image} />
      </Image>
      <Title>{actualite.title}</Title>
      <Link className="course__link" to={`/api/rag/actualites/${actualite.id}`}>
        En savoir plus...
      </Link>
      <span className="course__author m-left">By: Yandja Lalle</span>
    </Course>
  );
};
const Course = styled.div`
  width: 28%;
  margin: 2rem 1.4rem 2rem 1.4rem;
  border: 1.2px solid #999;
  padding-bottom: 4rem;
  position: relative;
`;
const Image = styled.div`
  background-color: #000;
  display: flex;
  width: 100%;
  position: relative;
  max-width: 100%;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  display: block;
  
`;
const Title = styled.h3`
  font-size: 1.8rem;
  margin: 2rem 2rem 0.5rem 2rem;
`;
export default ActualiteItem;
