import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<GameMatcher />} />
          <Route path="/game/*" element={<GameMatcher />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); //<Switch>는 첫번째 칠드런만 렌더링을 한다. 없으면 페이지에 주르륵 나온다. reactrouter v6에선 <Routes></Routes>로 바귀었다.
};

export default Games;
