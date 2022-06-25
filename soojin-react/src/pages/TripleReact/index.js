import React from 'react';
// import styled from 'styled-components';
import { Wrapper, Container, SpanNum, SpanText } from './style.js';

function TripleReact() {
  const numberArray = [
    {
      firstNumber: 400,
      secondNumber: 340,
      thirdNumber: 225,
      fourthNumber: 280,
    },
  ];

  const animation = () => {
    setTimeout(function () {
      // eslint-disable-next-line no-console
      console.log('2초후에 한번 실행됩니다.');
    }, 2000);
    const valueDisplays = document.querySelectorAll('.num');
    const interval = 2000;

    valueDisplays.forEach(valueDisplay => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      // const endValue = parseInt()
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  return (
    <Wrapper className="wrapper">
      <Container className="container">
        <SpanNum className="num" data-val="400">
          0
        </SpanNum>
        <SpanText className="text">Meals Delivered</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num" data-val="340">
          0
        </SpanNum>
        <SpanText className="text">Happy Customers</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num" data-val="225">
          0
        </SpanNum>
        <SpanText className="text">Menu Items</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num" data-val="280">
          0
        </SpanNum>
        <SpanText className="text">Five Stars</SpanText>
      </Container>
      <button onClick={animation}>click하면 바보~</button>
    </Wrapper>
  );
}

export default TripleReact;
