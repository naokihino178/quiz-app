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
    {
      questions: "lion",
      answers: ["ライオン", "タヌキ", "クマ"],
    },
    {
      questions: "red",
      answers: ["赤", "タヌキ", "クマ"],
    },
    {
      questions: "car",
      answers: ["車", "タヌキ", "クマ"],
    },
    {
      questions: "buy",
      answers: ["買う", "タヌキ", "クマ"],
    },
    {
      questions: "have",
      answers: ["持っている", "タヌキ", "クマ"],
    },
    {
      questions: "snow",
      answers: ["雪", "タヌキ", "クマ"],
    },
    {
      questions: "fly",
      answers: ["飛ぶ", "タヌキ", "クマ"],
    },
    {
      questions: "run",
      answers: ["走る", "タヌキ", "クマ"],
    },
  ]);

  const [getQuestionsAnswers, setGetQuestionsAnswers] = useState({
    // そもそもこれはstateで管理する必要があるのか？
    questions: "tea",
    answers: ["お茶", "牛乳", "コーヒー"],
  });

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const questionsLength = questionsAnswers.length; // 問題文+回答のオブジェクトを要素とした配列の長さ（2）
  const random = Math.random() * Math.floor(getQuestionsAnswers.answers.length);

  // 最大値までのランダムな整数を返す関数
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const changeQuestions = () => {
    //　配列をシャッフルする処理
    for (let i = questionsAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = questionsAnswers[i];
      questionsAnswers[i] = questionsAnswers[j];
      questionsAnswers[j] = tmp;
    }
    setGetQuestionsAnswers(questionsAnswers.shift()!); // !つけたらエラー消えた（nonnullアサーション）
  };
  const correct = () => {
    alert("正解！");
    setScore(score + 1);
    setQuestionNumber(questionNumber + 1);
    changeQuestions();
  };

  const wrong = () => {
    alert("残念！");
    setQuestionNumber(questionNumber + 1);
    changeQuestions();
  };

  if (questionNumber === 11) {
    alert(`終了！ ${score * 10}点！`);
  }

  return (
    <div className="container">
      <h1>{getQuestionsAnswers.questions}</h1>
      {/* 問題文からランダムに一つ値を取り出す */}
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={correct}
      >
        {/* {getQuestionsAnswers.answers.shift()とか{getQuestionsAnswers.answers.splice()とかで、ランダムにとろうとしたけどダメだった、changeした後に何も表示されなくなる、spliceの戻り値がから配列だからかも、要確認、なぜshiftもダメ？（配列が空になったのがなぜか引き継がれてる、問題文は表示されてるからレンダリングは問題なくできてるはずだけどなあ） */}
        {getQuestionsAnswers.answers[0]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={wrong}
      >
        {getQuestionsAnswers.answers[1]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={wrong}
      >
        {getQuestionsAnswers.answers[2]}
      </Button>
      <h2>{`${questionNumber}問目　正解数: ${score}`}</h2>
    </div>
  );
};

export default App;
