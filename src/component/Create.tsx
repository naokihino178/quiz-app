import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  resetQuestionAnswers: VoidFunction;
  addQuestionAnswers: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Create: React.FC<PROPS> = ({
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
  resetQuestionAnswers,
  addQuestionAnswers,
}) => {
  return (
    <div className="createContainer">
      <h2>問題の作成</h2>
      <div className="flexRow">
        <div className="qandaTitle">問題</div>
        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          value={newQuestion}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewQuestion(e.target.value);
          }}
        />
      </div>
      <div className="flexRow">
        <div className="qandaTitle">正解</div>
        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          value={newCorrectAnswer}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewCorrectAnswer(e.target.value);
          }}
        />
      </div>
      <div className="flexRow">
        <div className="qandaTitle">回答1</div>
        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          size="small"
          value={newAnswer1}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer1(e.target.value);
          }}
        />
      </div>
      <div className="flexRow">
        <div className="qandaTitle">回答2</div>
        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          size="small"
          value={newAnswer2}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer2(e.target.value);
          }}
        />
      </div>
      <div className="flexRow">
        <div className="qandaTitle">回答3</div>

        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          size="small"
          value={newAnswer3}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer3(e.target.value);
          }}
        />
      </div>
      <div className="flexRow">
        <div className="qandaTitle">回答4</div>

        <TextField
          id="outlined-basic"
          className="textField"
          inputProps={{ style: { color: "white" } }}
          size="small"
          value={newAnswer4}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnswer4(e.target.value);
          }}
        />
      </div>
      <div className="createButtonContainer">
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          onClick={addQuestionAnswers}
        >
          問題を追加する
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

export default Create;
