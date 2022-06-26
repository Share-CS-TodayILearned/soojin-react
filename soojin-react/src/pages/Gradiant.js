import React from 'react';
import styled from 'styled-components';

const Gradiant = () => {
  return (
    <>
      <DivFlex>
        <Div11 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
      </DivFlex>
      <DivFlex>
        <Div6 />
        <Div7 />
        <Div8 />
        <Div9 />
        <Div10 />
      </DivFlex>
      {/* <Div11 /> */}
    </>
  );
};

export default Gradiant;

const DivFlex = styled.div`
  display: flex;
`;
// 002 Night Fade
// const Div1 = styled.div`
//   margin : 20px;
//   height : 300px;
//   width : 300px;
//   border-radius: 50%;
//   background : yellow;
//   background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
// `;

// 010 Winter Neva
const Div2 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`;

// 019 Malibu Beach
const Div3 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
`;

// 030 Happy Fisher
const Div4 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
`;

// 047 Fly High
const Div5 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
`;

// 051 February Ink
const Div6 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
`;

// 106 Party Bliss
const Div7 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
`;

// 109 River City
const Div8 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
`;

// 120 Seashore
const Div9 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
`;

// 155 Landing Aircraft
const Div10 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(
    -225deg,
    #5d9fff 0%,
    #b8dcff 48%,
    #6bbbff 100%
  );
`;

// 159 Crystal River
const Div11 = styled.div`
  margin: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: yellow;
  background-image: linear-gradient(
    -225deg,
    #22e1ff 0%,
    #1d8fe1 48%,
    #625eb1 100%
  );
`;
