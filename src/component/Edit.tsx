import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Question from "./Question";

// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: string;
}
// Propsの型
interface PROPS {
  questionAnswers: Array<QUESTIONANSWERS>;
  resetQuestionAnswers: VoidFunction;
}

const Edit: React.FC<PROPS> = ({ questionAnswers, resetQuestionAnswers }) => {
  return (
    <div className="editContainer">
      <h2 className="editTitle">問題の編集</h2>
      <div className="editButtonContainer">
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/create"
        >
          問題を作成する
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
      {questionAnswers.map((questionAnswer: QUESTIONANSWERS) => (
        <div className="questionContainer">
          <Question
            questionAnswers={questionAnswers}
            questionAnswer={questionAnswer}
          />
        </div>
      ))}
    </div>
  );
};

export default Edit;
