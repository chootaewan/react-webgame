import React, {useRef, useState, useCallback} from 'react';
import Try from "./Try";

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런!');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          }
        ]));
        setValue('');
        inputEl.current.focus();
      }
    }
  }, [value, answer]);

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {/*[[사과, 맛있다],
        [배, 달다],
        [딸기, 상큼하다],
        [레몬, 시다],
        [떫은감, 떫다], 이런식의 배열로 나타내는것이 있고,
        
      ].map((v) => {
        retrun (
          <li><b>{v[0]}</b> - {v[1]}</li>
        )
      }) 
      
        [{fruit: 사과, taste: 맛있다},
        {fruit: 배, taste: 달다},
        {fruit: 딸기, taste: 상큼하다},
        {fruit: 레몬, taste: 시다},
        {fruit: 감, taste: 떫다}, 이런식의 객체로 나타내는 방법이 있다.
        
      ].map((v) => {
        retrun (
          <li><b>{v.fruit}</b> - {v.taste}</li>
        )
      }) 
         */}
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} /* 리액트가 key를 보고 같은 컴포넌트인지 판단한다. *//>
        ))}
      </ul>
    </>
  );
};

export default NumberBaseball;
