import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface PROPS {
  question: string;
  answers: string[];
  narrrowDownAnswer: VoidFunction;
  correct1: boolean;
  correct2: boolean;
  correct3: boolean;
  correct4: boolean;
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  changeQuestions: VoidFunction;
  score: number;
  questionNumber: number;
  resetQuestionAnswers: VoidFunction;
  disabled: boolean;
  nextBtn: boolean;
  modalSwitch: boolean;
}

const Game: React.FC<PROPS> = ({
  question,
  answers,
  narrrowDownAnswer,
  correct1,
  correct2,
  correct3,
  correct4,
  check1,
  check2,
  check3,
  check4,
  changeQuestions,
  score,
  questionNumber,
  resetQuestionAnswers,
  disabled,
  nextBtn,
  modalSwitch,
}) => {
  return (
    <div className="flexColumn">
      <h1 className="questionNumber">{`Q${questionNumber}`}</h1>
      <h1 className="question">{question}</h1>
      <div className="gameContainer">
        <p className={modalSwitch ? "correctOrIncorrect" : "none"}>
          {nextBtn ? "正解！" : "残念！"}
        </p>
        <Button
          variant="contained"
          color={correct1 ? "primary" : "secondary"}
          style={{ textTransform: "none", fontSize: "16px" }}
          className="answerButton"
          onClick={nextBtn ? check1 : () => {}}
          id="button1"
        >
          {answers![0]}
        </Button>
        <Button
          variant="contained"
          color={correct2 ? "primary" : "secondary"}
          style={{ textTransform: "none", fontSize: "16px" }}
          className="answerButton"
          onClick={nextBtn ? check2 : () => {}}
          id="button2"
        >
          {answers![1]}
        </Button>
        <Button
          variant="contained"
          color={correct3 ? "primary" : "secondary"}
          style={{ textTransform: "none", fontSize: "16px" }}
          className="answerButton"
          onClick={nextBtn ? check3 : () => {}}
          id="button3"
        >
          {answers![2]}
        </Button>
        <Button
          variant="contained"
          color={correct4 ? "primary" : "secondary"}
          style={{ textTransform: "none", fontSize: "16px" }}
          className="answerButton"
          onClick={nextBtn ? check4 : () => {}}
          id="button4"
        >
          {answers![3]}
        </Button>
      </div>
      <div className="gameButtonContainer">
        <Button
          variant="contained"
          onClick={nextBtn ? narrrowDownAnswer : () => {}}
          color="secondary"
          disabled={disabled ? true : false}
        >
          50 : 50
        </Button>
        <div className="flexRow">
          <Button
            variant="contained"
            component={Link}
            to="/"
            onClick={resetQuestionAnswers}
          >
            メニューへ
          </Button>
          <Button
            variant="contained"
            onClick={changeQuestions}
            disabled={nextBtn ? true : false}
          >
            次の問題へ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Game;
