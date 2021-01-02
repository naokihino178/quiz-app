import React, { useState } from "react";
import "./App.css";

import { Button } from "@material-ui/core";
import { couldStartTrivia } from "typescript";

const App = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState([
    {
      questions: "apple",
      answers: ["1リンゴ", "2バナナ", "3ブドウ"],
    },
    {
      questions: "fox",
      answers: ["1キツネ", "2タヌキ", "3クマ"],
    },
    {
      questions: "guitar",
      answers: ["1ギター", "2ベース", "3ドラム"],
    },
    {
      questions: "red",
      answers: ["1赤", "2青", "3緑"],
    },
    {
      questions: "car",
      answers: ["1車", "2電車", "3飛行機"],
    },
    {
      questions: "buy",
      answers: ["1買う", "2売る", "3交換する"],
    },
    {
      questions: "have",
      answers: ["1持っている", "2住んでいる", "3立っている"],
    },
    {
      questions: "snow",
      answers: ["1雪", "2雷", "3雨"],
    },
    {
      questions: "fly",
      answers: ["1飛ぶ", "2潜る", "3寝る"],
    },
    {
      questions: "run",
      answers: ["1走る", "2歩く", "3移動する"],
    },
  ]);

  const [getQuestionsAnswers, setGetQuestionsAnswers] = useState({
    // そもそもこれはstateで管理する必要があるのか？
    questions: "初期値",
    answers: ["1初期値", "2初期値", "3初期値"],
  });

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const questionsLength = questionsAnswers.length; // 問題文+回答のオブジェクトを要素とした配列の長さ（2）
  const random = Math.random() * Math.floor(getQuestionsAnswers.answers.length);
  const questions = getQuestionsAnswers.questions;
  const answers = getQuestionsAnswers.answers;

  // 最大値までのランダムな整数を返す関数
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const changeQuestions = () => {
    //　様々な問題+回答が入った配列をシャッフル
    for (let i = questionsAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = questionsAnswers[i];
      questionsAnswers[i] = questionsAnswers[j];
      questionsAnswers[j] = tmp;
    }
    // 変数nextAnswersにシャッフルした配列の一番上のオブジェクトのanswersを代入
    const nextAnswers = questionsAnswers[0].answers
    // nextAnswersをシャッフル
    for (let i = nextAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = nextAnswers[i];
      nextAnswers[i] = nextAnswers[j];
      nextAnswers[j] = tmp;
    }
    // getQuestionsAnswersにquestionsAnswerdの一番上のオブジェクト（Answersシャッフル済み）を代入
    setGetQuestionsAnswers(questionsAnswers.shift()!)
  };

  // console.log(answers);
  const correct = () => {
    // alert("正解！");
    setScore(score + 1);
    setQuestionNumber(questionNumber + 1);
    changeQuestions();
    // console.log(getQuestionsAnswers)
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
      <h1>{questions}</h1>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={correct}
      >
        {/* {getQuestionsAnswers.answers.shift()とか{getQuestionsAnswers.answers.splice()とかで、ランダムにとろうとしたけどダメだった、changeした後に何も表示されなくなる、spliceの戻り値がから配列だからかも、要確認、なぜshiftもダメ？（配列が空になったのがなぜか引き継がれてる、問題文は表示されてるからレンダリングは問題なくできてるはずだけどなあ） */}
        {answers[0]}
        {/* {console.log(getQuestionsAnswers)} */}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={wrong}
      >
        {answers[1]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={wrong}
      >
        {answers[2]}
      </Button>
      <h2>{`${questionNumber}問目　正解数: ${score}`}</h2>
    </div>
  );
};

export default App;
