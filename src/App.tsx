import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Main from "./component/Main";
import Edit from "./component/Edit";
import Menu from "./component/Menu";
import Form from "./component/Form";
import { db } from "./firebase"; // firebase.tsから、 const db = firebaseApp.firestore()
// import { Alert } from "@material-ui/lab";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  interface QUESTIONANSWERS {
    question: string;
    answers: string[];
    correctAnswer: string;
    // id: number | string;
  }

  interface GETQUESTIONANSWERS {
    question: string;
    answers: string[];
    correctAnswer: string;
  }

  const [questionAnswers, setQuestionAnswers] = useState<
    QUESTIONANSWERS[] | any
  >([]);

  const [getQuestionAnswers, setGetQuestionAnswers] = useState<
    GETQUESTIONANSWERS | any
  >({
    question: "",
    answers: [""],
    correctAnswer: "",
    id: "",
  });

  const [finishedQuestionAnswers, setFinishedQuestionAnswers] = useState<
    QUESTIONANSWERS[] | any
  >([]);

  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [restQuestions, setRestQuestions] = useState(questionAnswers.length);
  const [qaSwitch, setQaSwitch] = useState(true);
  const [newQuestion, setNewQuestion] = useState(""); // これは自動型付けでstringになっているはずだが、numberの可能性はないのか？（実際エラーにはならないが、TSは検知してくれないのか？）
  const [newAnswer1, setNewAnswer1] = useState("");
  const [newAnswer2, setNewAnswer2] = useState("");
  const [newAnswer3, setNewAnswer3] = useState("");
  const [newAnswer4, setNewAnswer4] = useState("");
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");

  const question = getQuestionAnswers.question;
  const answers = getQuestionAnswers.answers;

  useEffect(() => {
    // アプリケーションが立ち上がった時にFirebaseにアクセスして、存在するデータベースのtaskの内容を取得してきたい => useEffect
    const unSub = db.collection("questionAnswers").onSnapshot((snapshot) => {
      // db（Firestoreにアクセス）.collection("コレクション名").onSnapshot((snapshot) => {})
      setQuestionAnswers(
        snapshot.docs.map((doc) => ({
          question: doc.data().question,
          answers: doc.data().answers,
          correctAnswer: doc.data().correctAnswer,
          id: doc.id,
        })) // snapshotが常にFirestoreの変更を監視しているため、変更があると即座に反映される！（データベースに変更があると、snapshotが毎回シャッターを押す）
      ); // collection("questionAnswers") => [{id: ~, title, ~}, {id: ~, title, ~}, {id: ~, title, ~}]
    });
    return () => unSub(); // クリーンナップ関数（アンマウント時はFirebase側の変化を監視をする必要がないので、停止（db.collectionの返り値））
    // クリーンナップ関数、アンマウント時（ブラウザの更新時など？、マウントされていたReactのコンポーネントがDOMから解放されるとき）に行われる処理を定義
  }, []); // アプリケーションが起動した最初の一回だけデータを読みに行きたい => 第二引数は空の[]
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
    if (questionNumber !== 0) {
      // 初回の空文字（questionNumber = 0）の時以外、現在のgetQuestionAnswersをfinishedQuestionAnswersに代入
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
  console.log(`questionAnswers.length: ${questionAnswers.length}`); // 最後に二回0が表示されるのはなぜ？？
  console.log(`questionAnswers: ${questionAnswers}`);
  console.log(`getQuestionAnswers: ${getQuestionAnswers}`);
  console.log(`finishedQuestionAnswers: ${finishedQuestionAnswers}`);
  console.log(`questionNumber: ${questionNumber}`);
  console.log(`restQuestions: ${restQuestions}`);

  if (restQuestions < 0) {
    setQaSwitch(false);
    setRestQuestions(questionAnswers.length);
  }
  const resetQuestionAnswers = () => {
    setQuestionAnswers([...questionAnswers, ...finishedQuestionAnswers]);
    setFinishedQuestionAnswers([]);
    setQuestionNumber(0);
    setScore(0);
    setQaSwitch(true);
    setRestQuestions(questionAnswers.length + finishedQuestionAnswers.length);
  };

  const restartQuestionAnswers = () => {
    setQuestionAnswers([
      ...questionAnswers,
      getQuestionAnswers,
      ...finishedQuestionAnswers,
    ]);
    setFinishedQuestionAnswers([]);
    setQuestionNumber(0);
    setScore(0);
    setQaSwitch(true);
    setRestQuestions(
      questionAnswers.length + 1 + finishedQuestionAnswers.length
    );
  };

  // 新たな問題と回答を追加する処理
  const addQuestionAnswers = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    alert("問題を追加します");
    e.preventDefault();
    db.collection("questionAnswers").add({
      question: newQuestion,
      answers: [newAnswer1, newAnswer2, newAnswer3, newAnswer4],
      correctAnswer: newCorrectAnswer,
      id: Math.random().toString(32).substring(2),
    });

    setNewQuestion("");
    setNewAnswer1("");
    setNewAnswer2("");
    setNewAnswer3("");
    setNewAnswer4("");
    setNewCorrectAnswer("");
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
              restartQuestionAnswers={restartQuestionAnswers}
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={() => (
            <Edit
              questionAnswers={questionAnswers}
              resetQuestionAnswers={resetQuestionAnswers}
              // editQuestionAnswers={editQuestionAnswers}
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
              resetQuestionAnswers={resetQuestionAnswers}
              newQuestion={newQuestion}
              newAnswer1={newAnswer1}
              newAnswer2={newAnswer2}
              newAnswer3={newAnswer3}
              newAnswer4={newAnswer4}
              newCorrectAnswer={newCorrectAnswer}
              setNewQuestion={setNewQuestion}
              setNewAnswer1={setNewAnswer1}
              setNewAnswer2={setNewAnswer2}
              setNewAnswer3={setNewAnswer3}
              setNewAnswer4={setNewAnswer4}
              setNewCorrectAnswer={setNewCorrectAnswer}
              addQuestionAnswers={addQuestionAnswers}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
