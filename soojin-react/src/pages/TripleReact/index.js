import React from 'react';
import { useEffect } from 'react';
import DisplayValues from './DisplayValues/index.js';
import { Wrapper } from './style.js';

function TripleReact() {
  // userCountArray에서 number는 api 통신으로 받는 데이터
  // 백엔드에서 받기때문에 unique한 값을 가질것이고, 이를 id라 칭한다.
  const userCountArray = [
    { id: 1, number: 700, content: '만 명의 여행자' },
    { id: 2, number: 100, content: '만 개의 여행리뷰' },
    { id: 3, number: 470, content: '만 개의 여행일정' },
  ];

  const animation = () => {
    const valueDisplays = document.querySelectorAll('.num');

    valueDisplays.forEach(valueDisplay => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      // duration은 애니매이션 동작 시간으로 2초로 고정한다.
      // TODO : 2초로 동일하게 적용해도, 화면에서 동시에 끝나지 않는 부분 수정필요
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

  // 화면 맨처음 렌더링때만 애니매이션 필요하기때문에 useEffect에서 의존성배열을 []로 한다.
  useEffect(() => {
    animation();
  }, []);

  return (
    <Wrapper className="wrapper">
      {userCountArray.map(userCount => {
        return <DisplayValues key={userCount.id} userCount={userCount} />;
      })}
    </Wrapper>
  );
}

export default TripleReact;
