import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    console.log(data.results);
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <div className="context"><h1>Quizzing is so fun</h1></div> */}

        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul>
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            ></Route>
            <Route
              path="/quiz"
              exact
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            ></Route>
            <Route path="/result" exact element={<Result name={name} score={score}/>}></Route>
          </Routes>

          
        
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
