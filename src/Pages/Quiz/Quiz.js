import React, { useEffect, useState } from "react";
import "./Quiz.css";

import Question from "../../components/Questions";
import Loader from "../../components/Loader";
const Quiz = ({ name, questions,score, setScore,setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleQuestions([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(options);
  const handleQuestions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span style={{marginLeft:20}}>{questions[currQues].category}</span>
            <span style={{marginRight:20 , color:"#031"}}>
              {questions[currQues].difficulty}
              <br/>
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <Loader
          
        />

        
      )}
    </div>
  );
};

export default Quiz;
