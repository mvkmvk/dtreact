import React, { useState } from "react";
import vragen from "../vragen";
import Entry from "./Entry";

function createEntry(vragenOnderdeel){
  return(
    <Entry
      key={vragenOnderdeel.id}
      zin1={vragenOnderdeel.zin1}
      zin2={vragenOnderdeel.zin2}
      antwoord={vragenOnderdeel.antwoord}
    />
  );
}

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;

    if (nextQuestions < vragen.length) {
      setCurrentQuestion(nextQuestions);
    }
    else {
      setShowScore(true)
    }
  }

    return (
      <>
      <h1 className='header'>Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            Je hebt {score} van de {vragen.length} vragen goed.
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Vraag {currentQuestion + 1}</span>
                </div>
                <div className='question-text'>
                  <span>&nbsp;</span>
                </div>
              </div>

              <div className='answer-section'>
              {vragen[currentQuestion].zin1}
                {
                  vragen.map((createEntry) => (
                    <button onClick={() => handleAnswerButtonClick(vragen[currentQuestion].antwoord)}>D</button>
                  ))
                }
                {vragen[currentQuestion].zin2}
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;

//<h4 class="text-grey">{vragen.map(createEntry)}</h4>
//<Submit />
