import React from "react";
import { Button } from "@material-ui/core";
// import { Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface PROPS {
  score: number;
  questionNumber: number;
  resetQuestionAnswers: VoidFunction;
}

const Result: React.FC<PROPS> = ({
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
        {/* <Button variant="contained" color="primary">
          <Twitter />
          <span>結果をTweetする</span>
        </Button> */}
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
