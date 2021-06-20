import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Question from "./Question";

interface QuestionAnswers {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: string;
}
interface Props {
  questionAnswers: Array<QuestionAnswers>;
  resetQuestionAnswers: VoidFunction;
}

const Edit: React.FC<Props> = ({ questionAnswers, resetQuestionAnswers }) => {
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
      {questionAnswers.map((questionAnswer: QuestionAnswers) => (
        <div className="questionContainer" key={questionAnswer.id}>
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
