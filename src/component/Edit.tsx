import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import QandA from "./QandA";

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
  // editQuestionAnswers: VoidFunction;
  // deleteQuestionAnswers: (id: number | string) => void;
}

const Edit: React.FC<PROPS> = ({
  questionAnswers,
  resetQuestionAnswers,
  // editQuestionAnswers,
}) => {
  // const handleDelete = () => {
  //   // deleteQuestionAnswers(questionAnswer.id);
  // };
  return (
    <div className="editContainer">
        <h2>作成した問題</h2>
      <div className="editButtonContainer">
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/form"
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
        <QandA
          questionAnswers={questionAnswers}
          questionAnswer={questionAnswer}
          resetQuestionAnswers={resetQuestionAnswers}
        />
      ))}
    </div>
  );
};

export default Edit;
