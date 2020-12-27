import React, { useState } from "react";
import "./App.css";

import { Button } from "@material-ui/core";

const App = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState([
    {
      questions: "apple",
      answers: ["リンゴ", "バナナ", "ブドウ"],
    },
    {
      questions: "fox",
      answers: ["キツネ", "タヌキ", "クマ"],
    },
  ]);

  const [getQuestionsAnswers, setGetQuestionsAnswers] = useState({ // そもそもこれはstateで管理する必要があるのか？
    questions: "tea",
    answers: ["お茶", "牛乳", "コーヒー"],
  });
  
  const questionsLength = questionsAnswers.length; // 問題文+回答のオブジェクトを要素とした配列の長さ（2）
  const random = Math.random() * Math.floor(getQuestionsAnswers.answers.length);

  // 最大値までのランダムな整数を返す関数
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const changeQuestions = () => {
    setGetQuestionsAnswers(questionsAnswers[getRandomInt(questionsLength)]);
  };

  return (
    <div className="container">
      <h3>{getQuestionsAnswers.questions}</h3>
      {/* 問題文からランダムに一つ値を取り出す */}
      <Button variant="contained" color="primary" className="buttonSize">
        {/* {getQuestionsAnswers.answers.shift()とか{getQuestionsAnswers.answers.splice()とかで、ランダムにとろうとしたけどダメだった、changeした後に何も表示されなくなる（配列が空になったのがなぜか引き疲れてる、問題文は表示されてるからレンダリングは問題なくできてるはずだけどなあ） */}
        {getQuestionsAnswers.answers[0]}
      </Button>
      <Button variant="contained" color="primary" className="buttonSize">
        {getQuestionsAnswers.answers[1]}
      </Button>
      <Button variant="contained" color="primary" className="buttonSize">
        {getQuestionsAnswers.answers[2]}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={changeQuestions}
      >
        Change Questions
      </Button>
    </div>
  );
};

export default App;
