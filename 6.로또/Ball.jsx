import React, { memo } from 'react';

const Ball = memo(({ number }) => { //HOC 고차 컴포넌트
  let background;
  if (number <= 10) { //10 이하는 빨간색
    background = 'red';
  } else if (number <= 20) { //20이하는 주황색
    background = 'orange';
  } else if (number <= 30) { // 30이하는 노란색
    background = 'yellow';
  } else if (number <= 40) { //40이하는 파란색
    background = 'blue';
  } else { // 그외는 녹색
    background = 'green';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;
