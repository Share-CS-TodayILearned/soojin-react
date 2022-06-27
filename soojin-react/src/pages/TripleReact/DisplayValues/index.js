import React from 'react';
import useCountUp from '../hooks/useCountUp';
import { Container, SpanNum, SpanText } from './style.js';

const DisplayValues = props => {
  const userNumber = props.userCount.number;
  const userContent = props.userCount.content;

  const userCounts = useCountUp(350);

  return (
    <Container className="container">
      <SpanNum className="num">{userCounts}만 명</SpanNum>
      <SpanText className="text">의 사용자</SpanText>
    </Container>
  );
};

export default DisplayValues;
