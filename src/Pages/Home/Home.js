import React, { useState } from "react";
import "./Home.css";
import {TextField, MenuItem } from "@mui/material";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
const Home = ({ name, setName , fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

    const navigate= useNavigate();
  const handleSubmit=()=>{

    if(!category || !difficulty || !name){
        setError(true);
        return ;
    }else{
        setError(false);
        fetchQuestions(category , difficulty);
        navigate('/quiz')
    }
  }
  return (
    <div>
      <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30, color: "#fff" }}>Quiz Settings</span>
          <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <TextField
              style={{ marginBottom: 25, backgroundColor: "#fff" }}
              label="Enter Your Name"
              variant="outlined"
              color="secondary"
              focused
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30, backgroundColor: "#fff" }}
              color="secondary"
              focused
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30, backgroundColor: "#fff" }}
              color="secondary"
              focused
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
        
            <button data-text="Awesome" className="button"  onClick={handleSubmit}>
    <span className="actual-text">&nbsp;Start&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;Start&nbsp;</span>
</button>
          </div>
        </div>
        <div className="frontimages">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3407/3407022.png"
          className="banner"
          alt="quiz app"
        />
          <img
          src="https://cdn-icons-png.flaticon.com/128/3406/3406828.png"
          className="banner"
          alt="quiz app"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
