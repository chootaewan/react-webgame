const React = require('react');
const { useState } = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로초!');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputEl.current.focus();
    }
  };

  return ( /* value={value}
  onChange={(e) => setValue(e.currentTarget.value)} 이 두 요소가 들어가면 컨트롤드 인풋이라 하고, 없으면 언컨트롤드 인풋이라한다. 언컨트롤드는 input태그의 원시적 형태라 할 수 있겠다?*/
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
