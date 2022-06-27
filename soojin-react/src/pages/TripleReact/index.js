import React from 'react';
import useCountUp from './hooks/useCountUp';
import useFadeIn from './hooks/useFadeIn.js';
// import DisplayValues from './DisplayValues/index.js';
import { Wrapper, Container, SpanNum, SpanText } from './style.js';

function TripleReact() {
  // userCountArray에서 number는 api 통신으로 받는 데이터
  // const userCountArray = [
  //   { id: 1, number: 700, content: '만 명의 여행자' },
  //   { id: 2, number: 100, content: '만 개의 여행리뷰' },
  //   { id: 3, number: 470, content: '만 개의 여행일정' },
  // ];

  const [opacity, transY] = useFadeIn();
  const userCount = useCountUp(700);
  const reviewCount = useCountUp(21);
  const storeCount = useCountUp(470);

  return (
    <Wrapper className="wrapper" isVisible={opacity} transY={transY}>
      <Container className="container">
        <SpanNum className="num">{userCount}만 명</SpanNum>
        <SpanText className="text">의 여행자</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num">{reviewCount}만 개</SpanNum>
        <SpanText className="text">의 여행리뷰</SpanText>
      </Container>

      <Container className="container">
        <SpanNum className="num">{storeCount}만 개</SpanNum>
        <SpanText className="text">의 여행일정</SpanText>
      </Container>

      {/* {userCountArray.map(userCount => {
        return <DisplayValues key={userCount.id} userCount={userCount} />;
      })} */}
    </Wrapper>
  );
}

export default TripleReact;
