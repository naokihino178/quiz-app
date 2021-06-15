import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

interface Props {
  score: number;
  questionNumber: number;
  resetQuestionAnswers: VoidFunction;
}

const Result: React.FC<Props> = ({
  score,
  questionNumber,
  resetQuestionAnswers,
}) => {
  return (
    <div className="resultContainer">
      <h1>結果</h1>
      <h2>問題数：{questionNumber}</h2>
      <h2>正解数：{score}</h2>
      <h2>score：{Math.round((score / questionNumber) * 100)} / 100</h2>
      <div>
        <Button
          variant="contained"
          component={Link}
          to="/"
          onClick={resetQuestionAnswers}
        >
          メニューへ
        </Button>
      </div>
    </div>
  );
};

export default Result;
