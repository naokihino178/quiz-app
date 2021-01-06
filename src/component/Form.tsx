import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
}
// Propsの型
interface PROPS {
  questionAnswers: Array<QUESTIONANSWERS>;
  setQuestionAnswers: React.Dispatch<React.SetStateAction<QUESTIONANSWERS[]>>; // 後でちゃんとしとく
}

const Form: React.FC<PROPS> = ({ questionAnswers, setQuestionAnswers }) => {
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
      },
    ]);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Question"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewQuestion(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Answer1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer1(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Answer2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer2(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Answer3"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer3(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Answer4"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer4(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="correctAnswer"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewCorrectAnswer(e.target.value);
          }}
        />
        <button type="submit" onClick={addQuestionAnswers}>
          登録
        </button>
      </form>
      <Button variant="contained" component={Link} to="/">
        メニューへ戻る
      </Button>
    </div>
  );
};

export default Form;
