import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: number | string;
}
// Propsの型
interface PROPS {
  newQuestion: string;
  newAnswer1: string;
  newAnswer2: string;
  newAnswer3: string;
  newAnswer4: string;
  newCorrectAnswer: string;
  setNewQuestion: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer1: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer2: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer3: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer4: React.Dispatch<React.SetStateAction<string>>;
  setNewCorrectAnswer: React.Dispatch<React.SetStateAction<string>>;
  questionAnswers: Array<QUESTIONANSWERS>;
  setQuestionAnswers: React.Dispatch<React.SetStateAction<QUESTIONANSWERS[]>>;
  resetQuestionAnswers: VoidFunction;
  addQuestionAnswers: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Form: React.FC<PROPS> = ({
  newQuestion,
  newAnswer1,
  newAnswer2,
  newAnswer3,
  newAnswer4,
  newCorrectAnswer,
  setNewQuestion,
  setNewAnswer1,
  setNewAnswer2,
  setNewAnswer3,
  setNewAnswer4,
  setNewCorrectAnswer,
  questionAnswers,
  setQuestionAnswers,
  resetQuestionAnswers,
  addQuestionAnswers,
}) => {
  return (
    <div className="answersContainer">
      <h2>問題の作成</h2>
      <form className="formContainer" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="問題"
          value={newQuestion}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewQuestion(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="回答1"
          size="small"
          value={newAnswer1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer1(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="回答2"
          size="small"
          value={newAnswer2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer2(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="回答3"
          size="small"
          value={newAnswer3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer3(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="回答4"
          size="small"
          value={newAnswer4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer4(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          inputProps={{ style: { color: "white" } }}
          label="正解の回答"
          color="secondary"
          value={newCorrectAnswer}
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
        <Button
          variant="contained"
          component={Link}
          to="/"
          onClick={resetQuestionAnswers}
        >
          メニューへ戻る
        </Button>
      </div>
    </div>
  );
};

export default Form;
