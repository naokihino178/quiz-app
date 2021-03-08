import React, { useState, useEffect } from "react";
import "./css/styles.css";
import "./css/reset.css";
import Main from "./component/Main";
import Edit from "./component/Edit";
import Menu from "./component/Menu";
import Create from "./component/Create";
import { db } from "./firebase"; // firebase.tsから、 const db = firebaseApp.firestore()
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
  >([]);

  const [
    getQuestionAnswers,
    setGetQuestionAnswers,
  ] = useState<GETQUESTIONANSWERS>({
    question: "",
    answers: [""],
    correctAnswer: "",
  });

  const [score, setScore] = useState(0); // 正解数（正解したら+1）
  const [questionNumber, setQuestionNumber] = useState(0); // 問題数（問題が切り替わったら+1）
  const [restQuestions, setRestQuestions] = useState(questionAnswers.length); // 残りの問題数（）
  const [gameResultSwitch, setGameResultSwitch] = useState(true);
  const [newQuestion, setNewQuestion] = useState(""); // これは自動型付けでstringになっているはずだが、numberの可能性はないのか？（実際エラーにはならないが、TSは検知してくれないのか？）
  const [newAnswer1, setNewAnswer1] = useState("");
  const [newAnswer2, setNewAnswer2] = useState("");
  const [newAnswer3, setNewAnswer3] = useState("");
  const [newAnswer4, setNewAnswer4] = useState("");
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
  const [backMenu, setBackMenu] = useState(true);
  const [update, setUpdate] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [correct1, setCorrect1] = useState(true);
  const [correct2, setCorrect2] = useState(true);
  const [correct3, setCorrect3] = useState(true);
  const [correct4, setCorrect4] = useState(true);
  const [nextBtn, setNextBtn] = useState(true);
  const [modalSwitch, setModalSwitch] = useState(false);
  // const [disabledAnswer, setDisabledAnswer] = useState(false)

  const question = getQuestionAnswers.question;
  const answers = getQuestionAnswers.answers;
  const correctAnswer = getQuestionAnswers.correctAnswer;

  // データベースの問題、回答、正解、idをquestionAnswersにセット
  useEffect(() => {
    // backMenuに変更があった時（アプリ立ち上げ時も）をFirebaseにアクセスして、データベースの内容を取得 => useEffect
    const unSub = db.collection("questionAnswers").onSnapshot((snapshot) => {
      // db（Firestoreにアクセス）.collection("コレクション名").onSnapshot((snapshot) => {})
      setQuestionAnswers(
        snapshot.docs.map((doc) => ({
          question: doc.data().question,
          answers: doc.data().answers,
          correctAnswer: doc.data().correctAnswer,
          id: doc.id,
        })) // snapshotが常にFirestoreの変更を監視しているため、変更があると即座に反映される！（データベースに変更があると、snapshotが毎回シャッターを押す）
      );
    });
    return () => unSub(); // クリーンナップ関数（アンマウント時はFirebase側の変化を監視をする必要がないので、停止（db.collectionの返り値））
    // クリーンナップ関数、アンマウント時（ブラウザの更新時など？、マウントされていたReactのコンポーネントがDOMから解放されるとき）に行われる処理を定義
  }, [backMenu]); //　backMenuに変更があったときだけデータを読みに行きたい => 第二引数は[backMenu]

  // questionAnswers（問題のセット）をシャッフルし、getQuestionAnswersに代入する処理
  const changeQuestions = () => {
    if (restQuestions > 0) {
      // 問題途中で回答ボタンを押した時の挙動
      //　問題+回答が入った配列をシャッフル
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
      // getQuestionsAnswersにquestionsAnswersの一番上のオブジェクト（Answersシャッフル済み）を代入
      setGetQuestionAnswers(questionAnswers.shift()!);
      setQuestionNumber(questionNumber + 1);
      setRestQuestions(questionAnswers.length);
    } else if (restQuestions === 0 && questionNumber !== 0) {
      // 最後の問題で回答ボタンを押した時の挙動
      setRestQuestions(questionAnswers.length - 1);
    } else {
      // メニュー画面でスタートボタンを押した時の挙動
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
      // getQuestionsAnswersにquestionsAnswersの一番上のオブジェクト（Answersシャッフル済み）を代入
      setGetQuestionAnswers(questionAnswers.shift()!);
      setQuestionNumber(questionNumber + 1);
      setRestQuestions(questionAnswers.length);
    }
    setCorrect1(true);
    setCorrect2(true);
    setCorrect3(true);
    setCorrect4(true);
    setNextBtn(true);
    setModalSwitch(false);
  };

  const startGame = () => {
    changeQuestions();
    setDisabled(false);
  };

  const narrrowDownAnswer = () => {
    // 誤答一つ目のインデックス番号を取り出し空文字で置換
    const incorrectAnswer1 = answers.findIndex((answer) => {
      return answer !== correctAnswer;
    });
    answers[incorrectAnswer1] = "";
    // 誤答二つ目のインデックス番号を取り出し空文字で置換
    const incorrectAnswer2 = answers.findIndex((answer) => {
      return answer !== correctAnswer && answer !== "";
    });
    answers[incorrectAnswer2] = "";
    setDisabled(true);
    // 強制レンダリング
    setUpdate(update ? false : true);
  };

  // 正誤判定
  // const question = getQuestionAnswers.question;
  // const answers = getQuestionAnswers.answers;
  // const correctAnswer = getQuestionAnswers.correctAnswer;

  const correctIndex = answers.findIndex((answer) => {
    return answer === correctAnswer;
  });

  const correctButton = () => {
    switch (correctIndex) {
      case 0:
        setCorrect1(false);
        break;
      case 1:
        setCorrect2(false);
        break;
      case 2:
        setCorrect3(false);
        break;
      case 3:
        setCorrect4(false);
        break;
    }
  };

  const check1 = () => {
    if (
      document.getElementById("button1")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setModalSwitch(true);
      setScore(score + 1);
      changeQuestions();
    } else {
      setModalSwitch(true);
      correctButton();
      setNextBtn(false);
    }
  };
  const check2 = () => {
    if (
      document.getElementById("button2")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setModalSwitch(true);
      setScore(score + 1);
      changeQuestions();
    } else {
      setModalSwitch(true);
      correctButton();
      setNextBtn(false);
    }
  };
  const check3 = () => {
    if (
      document.getElementById("button3")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setModalSwitch(true);
      setScore(score + 1);
      changeQuestions();
    } else {
      setModalSwitch(true);
      correctButton();
      setNextBtn(false);
    }
  };
  const check4 = () => {
    if (
      document.getElementById("button4")?.textContent ===
      getQuestionAnswers.correctAnswer
    ) {
      setModalSwitch(true);
      setScore(score + 1);
      changeQuestions();
    } else {
      setModalSwitch(true);
      correctButton();
      setNextBtn(false);
    }
  };

  // 確認用
  console.log(`questionAnswers.length: ${questionAnswers.length}`);
  console.log(`questionAnswers: ${questionAnswers}`);
  console.log(`getQuestionAnswers: ${getQuestionAnswers}`);
  console.log(`questionNumber: ${questionNumber}`);
  console.log(`restQuestions: ${restQuestions}`);

  // 結果画面に移る処理
  if (restQuestions < 0) {
    setGameResultSwitch(false);
    setRestQuestions(questionAnswers.length);
  }

  // 「メニューに戻る」ボタンを押した時、各stateを初期状態に戻す処理
  const resetQuestionAnswers = () => {
    setQuestionNumber(0); // 問題数を0に（初期値に戻す）
    setScore(0); // 正解数を0に（初期値に戻す）
    setGameResultSwitch(true); // qaSwitchをtrueに（Gameコンポーネントが表示される）
    setBackMenu(!backMenu);
  };

  // 新たな問題と回答を追加する処理
  const addQuestionAnswers = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (
      !newQuestion ||
      !newCorrectAnswer ||
      !newAnswer1 ||
      !newAnswer2 ||
      !newAnswer3 ||
      !newAnswer4
    ) {
      alert("未入力の項目があります");
    } else if (
      newCorrectAnswer !== newAnswer1 &&
      newCorrectAnswer !== newAnswer2 &&
      newCorrectAnswer !== newAnswer3 &&
      newCorrectAnswer !== newAnswer4
    ) {
      alert("正解がありません");
    } else if (
      (newCorrectAnswer === newAnswer1 && newCorrectAnswer === newAnswer2) ||
      (newCorrectAnswer === newAnswer1 && newCorrectAnswer === newAnswer3) ||
      (newCorrectAnswer === newAnswer1 && newCorrectAnswer === newAnswer4) ||
      (newCorrectAnswer === newAnswer2 && newCorrectAnswer === newAnswer3) ||
      (newCorrectAnswer === newAnswer2 && newCorrectAnswer === newAnswer4) ||
      (newCorrectAnswer === newAnswer3 && newCorrectAnswer === newAnswer4)
    ) {
      alert("正解が重複しています");
    } else {
      const check = window.confirm(
        `以下の問題を追加します\n問題:   ${newQuestion}\n正解:   ${newCorrectAnswer}\n回答1: ${newAnswer1}\n回答2: ${newAnswer2}\n回答3: ${newAnswer3}\n回答4: ${newAnswer4}`
      );
      if (check) {
        e.preventDefault();
        db.collection("questionAnswers").add({
          question: newQuestion,
          answers: [newAnswer1, newAnswer2, newAnswer3, newAnswer4],
          correctAnswer: newCorrectAnswer,
        });
        setNewQuestion("");
        setNewAnswer1("");
        setNewAnswer2("");
        setNewAnswer3("");
        setNewAnswer4("");
        setNewCorrectAnswer("");
      }
    }
  };

  return (
    <Router>
      <div className="container">
        <Route
          exact
          path="/"
          render={() => (
            <Menu changeQuestions={changeQuestions} startGame={startGame} />
          )}
        />
        <Route
          exact
          path="/main"
          render={() => (
            <Main
              question={question}
              answers={answers}
              narrrowDownAnswer={narrrowDownAnswer}
              correct1={correct1}
              correct2={correct2}
              correct3={correct3}
              correct4={correct4}
              check1={check1}
              check2={check2}
              check3={check3}
              check4={check4}
              changeQuestions={changeQuestions}
              score={score}
              questionNumber={questionNumber}
              gameResultSwitch={gameResultSwitch}
              resetQuestionAnswers={resetQuestionAnswers}
              disabled={disabled}
              nextBtn={nextBtn}
              modalSwitch={modalSwitch}
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
            />
          )}
        />
        <Route
          exact
          path="/create"
          render={() => (
            <Create
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
