import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './CourseItem.css';

const InterviewItem = (Props) => {
  const interview = Props.interview;
  return (
    <Course>
      <Image>
        <Img src={interview.image} />
      </Image>
      <Title>{interview.title}</Title>
      <Link className="course__link" to={`/api/rag/interviews/${interview.id}`}>
        En savoir plus...
      </Link>
      <span className="course__author m-left">By: Yandja Lalle</span>
    </Course>
  );
};
const Course = styled.div`
  width: 28%;
  margin: 2rem 1.4rem 2rem 1.4rem;
  border: 1px solid #999;
  padding-bottom: 4rem;
  position: relative;
`;
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
const Title = styled.h3`
  font-size: 1.8rem;
  margin: 2rem 2rem 0.5rem 2rem;
`;
export default InterviewItem;
