import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (
        <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td> // useMemo로 감싸서 최적화를 궁리해 볼수 있다. []엔 cellIndex={i}가 들어가면 될것이다. 
      ))}
    </tr>
  );
});

export default Tr;
