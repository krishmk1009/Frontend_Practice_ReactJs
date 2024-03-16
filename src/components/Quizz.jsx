import React, { useState } from 'react';
import quizData from '../constant/quizz';

const Quizz = () => {
  const [questions, setQuestions] = useState(quizData);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [selectedAnsIndex, setSelectedAnsIndex] = useState(-1);
  const [selectedAns, setSelectedAns] = useState("")

  const handleSelect = (index) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? -1 : index);
  };

  const handleSelectAns = (index, text) => {
    setSelectedAnsIndex(index === selectedAnsIndex ? -1 : index);
    setSelectedAns(text === selectedAns ? "" : text)
  };

  const handleSubmit = ()=>{
    
    const currentQue = quizData[selectedQuestionIndex];
    const correctAnswer = currentQue.options.find((option)=>option.isCorrect)

    if (correctAnswer && correctAnswer.text === selectedAns) {
      alert('Correct answer!');
    } else {
      alert('Wrong answer. Please try again.');
    }
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} style={{ border: '2px solid black', margin: '5px' }}>
          <h3 onClick={() => handleSelect(index)}>{question.question}</h3>
          {selectedQuestionIndex === index && (
            <div>
              {question.options.map((option, i) => (
                <p
                  key={i}
                  onClick={() => handleSelectAns(i, option.text)}
                  style={{
                    border: '2px solid black',
                    margin: '4px',
                    padding: '5px',
                    backgroundColor: selectedAnsIndex === i ? 'green' : 'gray',
                  }}
                >
                  {option.text}
                </p>
              ))}

              <button onClick={handleSubmit}>Submit answer </button>

            </div>


          )}
        </div>
      ))}

    </div>
  );
};

export default Quizz;
