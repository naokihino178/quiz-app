import React from "react";
import "./App.css";
import { Button, Box } from "@material-ui/core";

// function App() {
//   const questions: string[] = ["apple", "grape", "banana"]; // 問題文の配列
//   const questionsLength = questions.length; // 問題文の長さ
//   // 最大値までのランダムな整数を返す関数
//   const getRandomInt = (max: number) => {
//     return Math.floor(Math.random() * Math.floor(max));
//   };

interface questionsAndAnswer{[
  questions: string,
  answers: [string, string, string]
]}

function App() {

  const questions:questionsAndAnswer = [{
    questions: "apple",
    answers: ["リンゴ", "ゴリラ", "ラッパ"],
  }
]
  const questionsLength = questions.length; // 問題文の長さ
  // 最大値までのランダムな整数を返す関数
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div className="container">
      <h3>{questions[getRandomInt(questionsLength)]}</h3>{" "}
      {/* 問題文からランダムに一つ値を取り出す */}
      <Button variant="contained" color="primary" className="buttonSize">
        回答1（問題文と紐づけ）
      </Button>
      <Button variant="contained" color="primary" className="buttonSize">
        回答2（問題文と紐づけ）
      </Button>
      <Button variant="contained" color="primary" className="buttonSize">
        回答3（問題文と紐づけ）
      </Button>
    </div>
  );
}

export default App;
