import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";

// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: number;
}
// Propsの型
interface PROPS {
  questionAnswers: Array<QUESTIONANSWERS>;
  resetQuestionAnswers: VoidFunction;
  deleteQuestionAnswers: (id: number) => void;
}

const Edit: React.FC<PROPS> = ({
  questionAnswers,
  resetQuestionAnswers,
  deleteQuestionAnswers,
}) => {
  // const handleDelete = () => {
  //   // deleteQuestionAnswers(questionAnswer.id);
  // };
  return (
    <div className="textAlignLeft">
      <h2>作成した問題</h2>
      {questionAnswers.map((questionAnswer: QUESTIONANSWERS) => (
        <div className="flexRow">
          <div>
            <h3>{questionAnswer.question}</h3>
            <p>
              {`1: ${questionAnswer.answers[0]}`}
              {`2: ${questionAnswer.answers[1]}`}
              {`3: ${questionAnswer.answers[2]}`}
              {`4: ${questionAnswer.answers[3]}`}
            </p>
            <p>{`正解: ${questionAnswer.correctAnswer}`}</p>
          </div>
          <Button onClick={() => deleteQuestionAnswers(questionAnswer.id)}>
            <Delete />
          </Button>
        </div>
      ))}
      <Button color="secondary" variant="contained" component={Link} to="/form">
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
  );
};

export default Edit;
