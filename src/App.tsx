import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Answers from "./component/Answers";
import Question from "./component/Question";
import Form from "./component/Form";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Twitter } from "@material-ui/icons";
// import { Alert } from '@material-ui/lab'

const App: React.FC = () => {
  interface QUESTIONANSWERS {
    question: string;
    answers: string[];
    correctAnswer: string;
  }

  const [questionAnswers, setQuestionAnswers] = useState<QUESTIONANSWERS[]>([
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
  ]);

  const [getQuestionAnswers, setGetQuestionAnswers] = useState({
    question: "初期値",
    answers: ["1初期値", "2初期値", "3初期値", "4初期値"],
    correctAnswer: "1初期値",
  });

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [qaSwitch, setQaSwitch] = useState(true);

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
      setQuestionNumber(questionNumber + 1);
      changeQuestions();
    }
  };
  console.log(questionAnswers.length); // 最後に二回0が表示されるのはなぜ？？

  useEffect(() => {
    if (questionAnswers.length < 1) {
      setQaSwitch(false);
      // alert(`終了！ ${score * 10}点！`);
    }
  }, [getQuestionAnswers]); // getQuestionAnswersの変更時のみ実行（questionAnswersじゃダメだったわ）、それとこのエラーは何？？

  return (
    <div className="container">
      {qaSwitch ? (
        <>
          <Question question={question} />
          <Answers
            answers={answers}
            check1={check1}
            check2={check2}
            check3={check3}
            check4={check4}
          />
          <h2>{`${questionNumber}問目　現在の正解数: ${score}`}</h2>
        </>
      ) : (
        <div className="answersContainer">
          <h1>結果</h1>
          <h2>問題数：{questionNumber}</h2>
          <h2>正解数：{score}</h2>
          <h2>正解率：{Math.round((score / questionNumber) * 100)}%</h2>
          <div className="flex">
            <Button variant="contained" color="primary">
              <Twitter />
              <span>結果をTweetする</span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => document.location.reload()}
            >
              初めからやり直す
            </Button>
          </div>
        </div>
      )}
      <Form
        questionAnswers={questionAnswers}
        setQuestionAnswers={setQuestionAnswers}
      />
    </div>
  );
};

export default App;
