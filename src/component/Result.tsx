import React from "react";
import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface PROPS {
  score: number;
  questionNumber: number;
  resetQuestionAnswers: VoidFunction;
}

const Result: React.FC<PROPS> = ({ score, questionNumber, resetQuestionAnswers }) => {
  return (
    <div className="answersContainer">
      <h1>結果</h1>
      <h3>問題数：{questionNumber}</h3>
      <h3>正解数：{score}</h3>
      <h3>正解率：{Math.round((score / questionNumber) * 100)}%</h3>
      <div className="flexRow">
        <Button variant="contained" color="primary">
          <Twitter />
          <span>結果をTweetする</span>
        </Button>
      </div>
      <Button variant="contained" component={Link} to="/" onClick={resetQuestionAnswers}>
        メニューへ戻る
      </Button>
    </div>
  );
};

export default Result;
