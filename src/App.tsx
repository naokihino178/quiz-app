import React, { useState } from "react";
import "./css/styles.css";
import Main from "./component/Main";
import Edit from "./component/Edit";
import Menu from "./component/Menu";
import Form from "./component/Form"

// import { Alert } from "@material-ui/lab";
// import { Create } from "@material-ui/icons";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  interface QUESTIONANSWERS {
    question: string;
    answers: string[];
    correctAnswer: string;
  }

  interface GETQUESTIONANSWERS {
    question: string;
    answers: string[];
    correctAnswer: string;
  }

  const [questionAnswers, setQuestionAnswers] = useState<
    QUESTIONANSWERS[] | any
  >([
    {
      question: "ニュートンが万有引力に気づいたきっかけの果実は？",
      answers: ["リンゴ", "バナナ", "ブドウ", "モモ"],
      correctAnswer: "リンゴ",
    },
    {
      question: "スマブラに出てくるのは？",
      answers: ["キツネ", "タヌキ", "クマ", "ライオン"],
      correctAnswer: "キツネ",
    },
    {
      question: "一般的に弦が6本なのは？",
      answers: ["ギター", "ベース", "ドラム", "シタール"],
      correctAnswer: "ギター",
    },
    {
      question: "日本の国旗に使われている色は？",
      answers: ["赤", "青", "緑", "黒"],
      correctAnswer: "赤",
    },
    {
      question: "最も重量が軽いのは？",
      answers: ["車", "電車", "飛行機", "船"],
      correctAnswer: "車",
    },
  ]);

  const [getQuestionAnswers, setGetQuestionAnswers] = useState<
    GETQUESTIONANSWERS | any
  >({
    question: "",
    answers: [""],
    correctAnswer: "",
  });

  const [finishedQuestionAnswers, setFinishedQuestionAnswers] = useState<
    QUESTIONANSWERS[] | any
  >([]);

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [restQuestions, setRestQuestions] = useState(questionAnswers.length);
  const [qaSwitch, setQaSwitch] = useState(true);

  const question = getQuestionAnswers.question;
  const answers = getQuestionAnswers.answers;

  const changeQuestions = () => {
    if (questionAnswers.length > 0) {
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
      setQuestionNumber(questionNumber + 1);
    }
    setRestQuestions(restQuestions - 1);
    if (questionAnswers.length < 4) {
      // ここを問題が増えても大丈夫なようにする
      // （初回の空文字以外）現在のgetQuestionAnswersをfinishedQuestionAnswersに代入
      setFinishedQuestionAnswers([
        ...finishedQuestionAnswers,
        getQuestionAnswers,
      ]);
    }
  };

  const check1 = () => {
    if (
      document.getElementById("button1")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setScore(score + 1);
      changeQuestions();
    } else {
      changeQuestions();
    }
  };
  const check2 = () => {
    if (
      document.getElementById("button2")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setScore(score + 1);
      changeQuestions();
    } else {
      changeQuestions();
    }
  };
  const check3 = () => {
    if (
      document.getElementById("button3")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setScore(score + 1);
      changeQuestions();
    } else {
      changeQuestions();
    }
  };
  const check4 = () => {
    if (
      document.getElementById("button4")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setScore(score + 1);
      changeQuestions();
    } else {
      changeQuestions();
    }
  };
  console.log(questionAnswers.length); // 最後に二回0が表示されるのはなぜ？？
  console.log(finishedQuestionAnswers);

  if (restQuestions < 0) {
    setQaSwitch(false);
    setQuestionAnswers(finishedQuestionAnswers);
    setRestQuestions(questionAnswers.length);
  }
  const resetQuestionAnswers = () => {
    setQuestionAnswers(finishedQuestionAnswers);
    setFinishedQuestionAnswers([]);
    setQuestionNumber(0);
    setScore(0);
    setQaSwitch(true);
    setRestQuestions(questionAnswers.length);
  };

  return (
    <Router>
      <div className="container">
        <Route
          exact
          path="/"
          render={() => <Menu changeQuestions={changeQuestions} />}
        />
        <Route
          exact
          path="/main"
          render={() => (
            <Main
              question={question}
              answers={answers}
              check1={check1}
              check2={check2}
              check3={check3}
              check4={check4}
              score={score}
              questionNumber={questionNumber}
              qaSwitch={qaSwitch}
              resetQuestionAnswers={resetQuestionAnswers}
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={() => (
            <Edit
              questionAnswers={questionAnswers}
            />
          )}
        />
        <Route
          exact
          path="/form"
          render={() => (
            <Form
              questionAnswers={questionAnswers}
              setQuestionAnswers={setQuestionAnswers}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
