import React from 'react';
import { useEffect } from 'react';
import DisplayValues from './DisplayValues/index.js';
import { Wrapper } from './style.js';

function TripleReact() {
  const userCountArray = [
    { number: 700, content: '만 명의 여행자' },
    { number: 100, content: '만 개의 여행리뷰' },
    { number: 470, content: '만 개의 여행일정' },
  ];

  const animation = () => {
    setTimeout(function () {
      console.log('2초후에 한번 실행됩니다.');
    }, 2000);
    const valueDisplays = document.querySelectorAll('.num');
    // console.log(valueDisplays);

    valueDisplays.forEach(valueDisplay => {
      // console.log(valueDisplay);
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      // console.log(endValue);
      const duration = 2;
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
      {userCountArray.map((userCount, index) => {
        console.log('userCount', userCount);
        return <DisplayValues userCount={userCount} />;
      })}
    </Wrapper>
  );
}

export default TripleReact;
