import React, { useState } from "react";
import "./App.css";

import { Button } from "@material-ui/core";

const App: React.FC = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState([
    {
      questions: "apple",
      answers: ["1リンゴ", "2バナナ", "3ブドウ"],
      correctAnswer: "1リンゴ",
    },
    {
      questions: "fox",
      answers: ["1キツネ", "2タヌキ", "3クマ"],
      correctAnswer: "1キツネ",
    },
    {
      questions: "guitar",
      answers: ["1ギター", "2ベース", "3ドラム"],
      correctAnswer: "1ギター",
    },
    {
      questions: "red",
      answers: ["1赤", "2青", "3緑"],
      correctAnswer: "1赤",
    },
    {
      questions: "car",
      answers: ["1車", "2電車", "3飛行機"],
      correctAnswer: "1車",
    },
    {
      questions: "buy",
      answers: ["1買う", "2売る", "3交換する"],
      correctAnswer: "1買う",
    },
    {
      questions: "have",
      answers: ["1持っている", "2住んでいる", "3立っている"],
      correctAnswer: "1持っている",
    },
    {
      questions: "snow",
      answers: ["1雪", "2雷", "3雨"],
      correctAnswer: "1雪",
    },
    {
      questions: "fly",
      answers: ["1飛ぶ", "2潜る", "3寝る"],
      correctAnswer: "1飛ぶ",
    },
    {
      questions: "run",
      answers: ["1走る", "2歩く", "3移動する"],
      correctAnswer: "1走る",
    },
  ]);

  const [getQuestionsAnswers, setGetQuestionsAnswers] = useState({
    // そもそもこれはstateで管理する必要があるのか？
    questions: "初期値",
    answers: ["1初期値", "2初期値", "3初期値"],
    correctAnswer: "1初期値",
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
    const nextAnswers = questionsAnswers[0].answers;
    // nextAnswersをシャッフル
    for (let i = nextAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = nextAnswers[i];
      nextAnswers[i] = nextAnswers[j];
      nextAnswers[j] = tmp;
    }
    // getQuestionsAnswersにquestionsAnswerdの一番上のオブジェクト（Answersシャッフル済み）を代入
    setGetQuestionsAnswers(questionsAnswers.shift()!);
  };

  const check1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      document.getElementById("button1")?.textContent ===
      getQuestionsAnswers.correctAnswer
    ) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    } else {
      alert("残念！");
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    }
  };
  const check2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      document.getElementById("button2")?.textContent ===
      getQuestionsAnswers.correctAnswer
    ) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    } else {
      alert("残念！");
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    }
  };
  const check3 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      document.getElementById("button3")?.textContent ===
      getQuestionsAnswers.correctAnswer
    ) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    } else {
      alert("残念！");
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    }
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
        onClick={check1}
        id="button1"
      >
        {answers[0]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check2}
        id="button2"
      >
        {answers[1]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check3}
        id="button3"
      >
        {answers[2]}
      </Button>
      <h2>{`${questionNumber}問目　現在の正解数: ${score}`}</h2>
      <Button variant="contained" color="secondary" onClick={() => document.location.reload()}>
        初めからやり直す
      </Button>
    </div>
  );
};

export default App;
