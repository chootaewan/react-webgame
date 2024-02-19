import React, { memo } from 'react';

const Try = memo(({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
// 자식 프롭스를 바꾸면 안된다. 바꾸려면 state를 만들어서 바꿔라.
export default Try;
