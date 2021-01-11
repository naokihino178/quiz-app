import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: number|string;
}
// Propsの型
interface PROPS {
  questionAnswers: Array<QUESTIONANSWERS>;
  setQuestionAnswers: React.Dispatch<React.SetStateAction<QUESTIONANSWERS[]>>;
  resetQuestionAnswers:VoidFunction;
}

const Form: React.FC<PROPS> = ({ questionAnswers, setQuestionAnswers, resetQuestionAnswers }) => {
  const [newQuestion, setNewQuestion] = useState(""); // これは自動型付けでstringになっているはずだが、numberの可能性はないのか？（実際エラーにはならないが、TSは検知してくれないのか？）
  const [newAnswer1, setNewAnswer1] = useState("");
  const [newAnswer2, setNewAnswer2] = useState("");
  const [newAnswer3, setNewAnswer3] = useState("");
  const [newAnswer4, setNewAnswer4] = useState("");
  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
  // 新たな問題と回答を追加する処理
  const addQuestionAnswers = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("aaa");

    setQuestionAnswers([
      ...questionAnswers,
      {
        question: newQuestion,
        answers: [newAnswer1, newAnswer2, newAnswer3, newAnswer4],
        correctAnswer: newCorrectAnswer,
        id: Math.random().toString(32).substring(2),
      },
    ]);
  };
  return (
    <div　className="answersContainer">
      <h2>問題の作成</h2>
      <form className="formContainer" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="問題"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewQuestion(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="回答1"
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer1(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="回答2"
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer2(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="回答3"
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer3(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="回答4"
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer4(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="正解の回答"
          color="secondary"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewCorrectAnswer(e.target.value);
          }}
        />
      </form>
      <div className="flexRow">
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={addQuestionAnswers}
        >
          登録
        </Button>
        <Button variant="contained" component={Link} to="/" onClick={resetQuestionAnswers}>
          メニューへ戻る
        </Button>
      </div>
    </div>
  );
};

export default Form;
