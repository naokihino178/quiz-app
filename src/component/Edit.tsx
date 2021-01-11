import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";

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
  // editQuestionAnswers: VoidFunction;
  deleteQuestionAnswers: (id: number) => void;
  newQuestion: string;
  newAnswer1: string;
  newAnswer2: string;
  newAnswer3: string;
  newAnswer4: string;
  newCorrectAnswer: string;
  setNewQuestion: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer1: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer2: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer3: React.Dispatch<React.SetStateAction<string>>;
  setNewAnswer4: React.Dispatch<React.SetStateAction<string>>;
  setNewCorrectAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const Edit: React.FC<PROPS> = ({
  questionAnswers,
  resetQuestionAnswers,
  // editQuestionAnswers,
  deleteQuestionAnswers,
  newQuestion,
  newAnswer1,
  newAnswer2,
  newAnswer3,
  newAnswer4,
  newCorrectAnswer,
  setNewQuestion,
  setNewAnswer1,
  setNewAnswer2,
  setNewAnswer3,
  setNewAnswer4,
  setNewCorrectAnswer,
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
              {/* <TextField
                id="outlined-basic"
                label="問題"
                value={newAnswer1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNewAnswer1(e.target.value);
                }}
              /> */}
              {`1: ${questionAnswer.answers[0]}`}
              {`2: ${questionAnswer.answers[1]}`}
              {`3: ${questionAnswer.answers[2]}`}
              {`4: ${questionAnswer.answers[3]}`}
            </p>
            <p>{`正解: ${questionAnswer.correctAnswer}`}</p>
          </div>
          <div className="flexColumn">
            <Button component={Link} to="/form">
              <EditIcon
                onClick={() => {
                  // setNewQuestion(questionAnswer.question);
                  // setNewAnswer1(questionAnswer.answers[0]);
                  // setNewAnswer2(questionAnswer.answers[1]);
                  // setNewAnswer3(questionAnswer.answers[2]);
                  // setNewAnswer4(questionAnswer.answers[3]);
                  // setNewCorrectAnswer(questionAnswer.correctAnswer);
                  // // deleteQuestionAnswers(questionAnswer.id)
                }}
              />
            </Button>
            <Button onClick={() => deleteQuestionAnswers(questionAnswer.id)}>
              <Delete />
            </Button>
          </div>
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
