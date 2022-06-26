import React from 'react';
import { useEffect } from 'react';
import { Wrapper, Container, SpanNum, SpanText } from './style.js';

function TripleReact() {
  const firstNumber = 700;
  const secondNumber = 100;
  const thirdNumber = 470;

  const animation = () => {
    setTimeout(function () {
      console.log('2초후에 한번 실행됩니다.');
    }, 2000);
    const valueDisplays = document.querySelectorAll('.num');
    console.log(valueDisplays);

    valueDisplays.forEach(valueDisplay => {
      console.log(valueDisplay);
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      console.log(endValue);
      const duration = 2;
      console.log('duration', duration);
      const counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <Wrapper className="wrapper">
      <Container className="container">
        <SpanNum className="num" data-val={firstNumber}>
          0
        </SpanNum>
        <SpanText className="text">만 명의 여행자</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num" data-val={secondNumber}>
          0
        </SpanNum>
        <SpanText className="text">만 개의 여행리뷰</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num" data-val={thirdNumber}>
          0
        </SpanNum>
        <SpanText className="text">만 개의 여행일정</SpanText>
      </Container>

      <button>click하면 바보~</button>
    </Wrapper>
  );
}

export default TripleReact;
