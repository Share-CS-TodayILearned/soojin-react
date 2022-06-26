import React from 'react';
import { Container, SpanNum, SpanText } from './style.js';

const DisplayValues = props => {
  const userNumber = props.userCount.number;
  const userContent = props.userCount.content;
  return (
    <Container className="container">
      <SpanNum className="num" data-val={userNumber}>
        0
      </SpanNum>
      <SpanText className="text">{userContent}</SpanText>
    </Container>
  );
};

export default DisplayValues;
