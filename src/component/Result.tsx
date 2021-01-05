import React from 'react'
import { Button } from "@material-ui/core";
import { Twitter} from "@material-ui/icons";

interface PROPS {
    score: number;
    questionNumber: number;
}

const Result:React.FC<PROPS> = ({score, questionNumber}) => {
    return (
        <div className="answersContainer">
          <h1>結果</h1>
          <h2>問題数：{questionNumber}</h2>
          <h2>正解数：{score}</h2>
          <h2>正解率：{Math.round((score / questionNumber) * 100)}%</h2>
          <div className="flex">
            <Button variant="contained" color="primary">
              <Twitter />
              <span>結果をTweetする</span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => document.location.reload()}
            >
              初めからやり直す
            </Button>
          </div>
        </div>

    )
}

export default Result
