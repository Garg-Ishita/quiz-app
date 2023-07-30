import { Button } from "@mui/material";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import './Questions.css'

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  
  const handleSelect=(i)=>{
    if(selected===i && selected===correct){
        return "select";
    }else if(selected===i && selected!==correct){
        return "wrong";
    }else if(i===correct){
        return "select";
    }
  };

  const handleCheck=(i)=>{
    setSelected(i);
    if(i===correct){
        setScore(score+1);
        setError(false);
    }
  };


const navigate= useNavigate();
  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
      setError(false);
    } else setError("Please select an option first");
  };

  // setError(false);
  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  return (
    <div className="question">
     {error && <ErrorMessage title="Please Fill all the fields"/>}
      <h3 style={{color:"white"}}>Question No.{currQues + 1}</h3>
      <div className="singleQuestion">
        <h3 style={{color:"white"}}>{questions[currQues].question}</h3>
        <div className="options">
         
          {options &&
            options.map((i) => (
              <button
                onClick={()=>handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            style={{ width: 130,height:50 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ width: 130,height:50 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
