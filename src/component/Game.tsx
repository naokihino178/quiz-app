import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface PROPS {
  question: string;
  answers: string[];
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  score: number;
  questionNumber: number;
  restartQuestionAnswers: VoidFunction;
}

const Game: React.FC<PROPS> = ({
  question,
  answers,
  check1,
  check2,
  check3,
  check4,
  score,
  questionNumber,
  restartQuestionAnswers,
}) => {
  return (
    <div className="flexColumn">
      <h1>{`Q${questionNumber}: ${question}`}</h1>
      <div className="gameContainer">
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "none", fontSize: "22px" }}
          className="answerButton"
          onClick={check1}
          id="button1"
        >
          {answers![0]}
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "none", fontSize: "22px" }}
          className="answerButton"
          onClick={check2}
          id="button2"
        >
          {answers![1]}
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "none", fontSize: "22px" }}
          className="answerButton"
          onClick={check3}
          id="button3"
        >
          {answers![2]}
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "none", fontSize: "22px" }}
          className="answerButton"
          onClick={check4}
          id="button4"
        >
          {answers![3]}
        </Button>
      </div>
      <div className="flexRow">
        <Button
          variant="contained"
          component={Link}
          to="/"
          onClick={restartQuestionAnswers}
        >
          メニューへ戻る
        </Button>
      </div>
    </div>
  );
};

export default Game;
