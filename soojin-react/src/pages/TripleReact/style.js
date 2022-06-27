import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 80vw;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const Container = styled.div`
  position: relative;
  font-size: 16px;
  width: 28vmin;
  height: 28vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 0;
  border-radius: 0.5em;
  background-color: #21242b;
  border-bottom: 10px solid #18f98f;
`;

export const SpanNum = styled.span`
  display: grid;
  color: #fff;
  place-items: center;
  font-weight: 600;
  font-size: 3em;
`;

export const SpanText = styled.span`
  color: #e0e0e0;
  font-size: 1em;
  text-align: center;
  pad: 0.7em 0;
  font-weight: 400;
  line-height: 0;
`;
