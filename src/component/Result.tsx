import React from "react";
import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface PROPS {
  score: number;
  questionNumber: number;
}

const Result: React.FC<PROPS> = ({ score, questionNumber }) => {
  return (
    <div className="answersContainer">
      <h1>結果</h1>
      <h2>問題数：{questionNumber}</h2>
      <h2>正解数：{score}</h2>
      <h2>正解率：{Math.round((score / questionNumber) * 100)}%</h2>
      <div className="flexRow">
        <Button variant="contained" color="primary">
          <Twitter />
          <span>結果をTweetする</span>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => document.location.reload()}
        >
          はじめからやり直す
        </Button>
      </div>
      <Button variant="contained" component={Link} to="/">
        メニューへ戻る
      </Button>
    </div>
  );
};

export default Result;
