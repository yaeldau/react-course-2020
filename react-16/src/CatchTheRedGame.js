import React, {useState} from 'react';

const Board = (props) => {
  const {setScore, redIdx, setRedIdx} = props;

  function handleClick(e, idx) {
    if (idx === redIdx) {
      setScore(score => score + 10);
      setRedIdx(Math.floor(Math.random() * (10)));
    } else {
      setScore(score => score - 5);
    }
  }

  return (
      <div>
        {[...Array(10).keys()].map((o, i) =>
            <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: i === redIdx ? 'red' : 'black',
                  display: 'inline-block',
                  'margin-right': '5px'
                }}
                onClick={(e) => handleClick(e, i)}/>
        )}


      </div>
  )
}

const Score = (props) => {

  const {score} = props;

  return (
      <p>Your score is: {score}</p>
  )
}

export default function CatchTheRedGame(props) {

  const [score, setScore] = useState(0);
  const [redIdx, setRedIdx] = useState(9);

  function startNewGame() {
    setScore(0);
    setRedIdx(9);
  }

  return (
      <div>
        <Board setScore={setScore} redIdx={redIdx} setRedIdx={setRedIdx}/>
        <Score score={score}/>
        <button onClick={startNewGame}>new game</button>
      </div>
  )
}