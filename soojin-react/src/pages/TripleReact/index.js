import React from 'react';
import useCountUp from './hooks/useCountUp';
import useFadeIn from './hooks/useFadeIn.js';
import { Wrapper, Container, SpanNum, SpanText } from './style.js';

function TripleReact() {
  const countNumsObj = { user: 700, review: 100, trip: 470 };

  const [opacity, transY] = useFadeIn();
  const userCount = useCountUp(countNumsObj.user);
  const reviewCount = useCountUp(countNumsObj.review);
  const tripCount = useCountUp(countNumsObj.trip);

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
        <SpanNum className="num">{tripCount}만 개</SpanNum>
        <SpanText className="text">의 여행일정</SpanText>
      </Container>

      {/* {userCountArray.map(userCount => {
        return <DisplayValues key={userCount.id} userCount={userCount} />;
      })} */}
    </Wrapper>
  );
}

export default TripleReact;
