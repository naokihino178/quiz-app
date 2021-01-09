import React from "react";
import Answers from "./Answers";
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
}) => {
  return (
    <div className="flexColumn">
      <h1>{`Q${questionNumber}: ${question}`}</h1>
      <Answers
        answers={answers}
        check1={check1}
        check2={check2}
        check3={check3}
        check4={check4}
      />
      <div className="flexRow">
        <Button variant="contained" component={Link} to="/">
          メニューへ戻る
        </Button>
      </div>
    </div>
  );
};

export default Game;
