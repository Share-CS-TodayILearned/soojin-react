import React from 'react';
import styled from 'styled-components';

const IncreaseNumber = () => {
  let endNumber = 50;
  const speed = 10;

  function incNbrRec(i, endNum) {
    if (i <= endNum) {
      endNumber = i;
      setTimeout(function () {
        incNbrRec(i + 1, endNum);
      }, speed);
    }
  }

  return (
    <IncreaseNumberBody>
      <Number id="nbr">{endNumber}</Number>
      <Button onclick={incNbrRec(0, endNumber)}>Play Again</Button>
    </IncreaseNumberBody>
  );
};

export default IncreaseNumber;

const IncreaseNumberBody = styled.div`
  background: #ffcc10;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Number = styled.p`
  font-size: 62px;
  margin: 44px 0 0 0;
`;

const Button = styled.button`
  outline: none;
  background: none;
  border: 2px solid #000;
  padding: 11px;
  cursor: pointer;

  &:active {
    background: #000;
    color: #ffcc10;
  }
`;
