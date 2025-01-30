import React, { useRef, useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { useMediaQuery } from 'react-responsive';

const CrosswordPuzzle = () => {
  const crosswordRef = useRef();
  const [isSolved, setIsSolved] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const data = {
    across: {
      1: { clue : 'What we are here for', answer: 'SMALLBUSINESS', row: 0, col: 0 },
      3: { clue: 'Created by local class', answer: 'STUDENTMADE', row: 3, col: 1 },
      4: { clue: 'Ball rolling', answer: 'BOWLING', row: 5, col: 1 },
      7: { clue: 'Previous CYC Client', answer: 'ARTBYSRG', row: 7, col: 4 },
      8: { clue: 'Consult You Community abr.', answer: 'CYC', row: 10, col: 4 },
    },
    down: {
      2: { clue: 'Jacob is a biiiig fan', answer: 'BIKELIBRARY', row: 0, col: 5 },
      5: { clue: 'Where?', answer: 'NCSTATE', row: 5, col: 9 },
      6: { clue: 'Treats for canines', answer: 'DOGSNOG', row: 5, col: 11 },
    },
  };

  return (
    <div style={{ width: isMobile ? '100%' : '500px', margin: '0 auto' }}>
      <Crossword
        data={data}
        ref={crosswordRef}
        theme={{
            allowNonSquare: true,
            columnBreakpoint: '9999px',
            gridBackground: '#203864',
            cellBackground: '#ffe',
            cellBorder: '#fca',
            textColor: '#203864',
            numberColor: '#203864',
            focusBackground: '#D17359',
            highlightBackground:'rgb(212, 156, 140)',
          }}
      />
      {isSolved && <p>Congratulations! You solved the puzzle!</p>}
      {!isSolved && <p>YOU SUCK</p>}
      <button onClick={() => setIsSolved(crosswordRef.current.isCrosswordCorrect())}>Submit</button>
      <button onClick={() => crosswordRef.current.reset()}>Reset</button>
      <button onClick={() => crosswordRef.current.fillAllAnswers()}>Set</button>
    </div>
  );
};

export default CrosswordPuzzle;
