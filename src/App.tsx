import React, { useState } from "react";
import "./css/styles.css";
import Answers from "./component/Answers";
import Question from "./component/Question";
import { Button } from "@material-ui/core";

const App: React.FC = () => {
  const [questionAnswers, setQuestionAnswers] = useState([
    {
      question: "apple",
      answers: ["1リンゴ", "2バナナ", "3ブドウ", "4モモ"],
      correctAnswer: "1リンゴ",
    },
    {
      question: "fox",
      answers: ["1キツネ", "2タヌキ", "3クマ", "4ライオン"],
      correctAnswer: "1キツネ",
    },
    {
      question: "guitar",
      answers: ["1ギター", "2ベース", "3ドラム", "4シタール"],
      correctAnswer: "1ギター",
    },
    {
      question: "red",
      answers: ["1赤", "2青", "3緑", "4黒"],
      correctAnswer: "1赤",
    },
    {
      question: "car",
      answers: ["1車", "2電車", "3飛行機", "4バス"],
      correctAnswer: "1車",
    },
    {
      question: "buy",
      answers: ["1買う", "2売る", "3交換する", "4壊す"],
      correctAnswer: "1買う",
    },
    {
      question: "have",
      answers: ["1持っている", "2住んでいる", "3立っている", "4知っている"],
      correctAnswer: "1持っている",
    },
    {
      question: "snow",
      answers: ["1雪", "2雷", "3雨", "4嵐"],
      correctAnswer: "1雪",
    },
    {
      question: "fly",
      answers: ["1飛ぶ", "2潜る", "3寝る", "4泣く"],
      correctAnswer: "1飛ぶ",
    },
    {
      question: "run",
      answers: ["1走る", "2歩く", "3移動する", "4入る"],
      correctAnswer: "1走る",
    },
  ]);

  const [getQuestionAnswers, setGetQuestionAnswers] = useState({
    // そもそもこれはstateで管理する必要があるのか？
    question: "初期値",
    answers: ["1初期値", "2初期値", "3初期値", "4初期値"],
    correctAnswer: "1初期値",
  });

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const question = getQuestionAnswers.question;
  const answers = getQuestionAnswers.answers;

  const changeQuestions = () => {
    //　様々な問題+回答が入った配列をシャッフル
    for (let i = questionAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = questionAnswers[i];
      questionAnswers[i] = questionAnswers[j];
      questionAnswers[j] = tmp;
    }
    // 変数nextAnswersにシャッフルした配列の一番上のオブジェクトのanswersを代入
    const nextAnswers = questionAnswers[0].answers;
    // nextAnswersをシャッフル
    for (let i = nextAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = nextAnswers[i];
      nextAnswers[i] = nextAnswers[j];
      nextAnswers[j] = tmp;
    }
    // getQuestionsAnswersにquestionsAnswerdの一番上のオブジェクト（Answersシャッフル済み）を代入
    setGetQuestionAnswers(questionAnswers.shift()!);
  };

  const check1 = () => {
    if (
      document.getElementById("button1")?.textContent ===
      getQuestionAnswers.correctAnswer
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
  const check2 = () => {
    if (
      document.getElementById("button2")?.textContent ===
      getQuestionAnswers.correctAnswer
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
  const check3 = () => {
    if (
      document.getElementById("button3")?.textContent ===
      getQuestionAnswers.correctAnswer
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
  const check4 = () => {
    if (
      document.getElementById("button4")?.textContent ===
      getQuestionAnswers.correctAnswer
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
      <Question question={question} />
      <Answers
        answers={answers}
        check1={check1}
        check2={check2}
        check3={check3}
        check4={check4}
      />
      <h2>{`${questionNumber}問目　現在の正解数: ${score}`}</h2>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => document.location.reload()}
      >
        初めからやり直す
      </Button>
    </div>
  );
};

export default App;
