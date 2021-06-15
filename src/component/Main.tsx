import React from "react";
import Game from "./Game";
import Result from "./Result";

interface Props {
  question: string;
  answers: string[];
  narrrowDownAnswer: VoidFunction;
  correct1: boolean;
  correct2: boolean;
  correct3: boolean;
  correct4: boolean;
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  changeQuestions: VoidFunction;
  score: number;
  questionNumber: number;
  gameResultSwitch: boolean;
  resetQuestionAnswers: VoidFunction;
  disabled: boolean;
  nextBtn: boolean;
  modalSwitch: boolean;
}

const Main: React.FC<Props> = ({
  question,
  answers,
  narrrowDownAnswer,
  correct1,
  correct2,
  correct3,
  correct4,
  check1,
  check2,
  check3,
  check4,
  changeQuestions,
  score,
  questionNumber,
  gameResultSwitch,
  resetQuestionAnswers,
  disabled,
  nextBtn,
  modalSwitch,
}) => {
  return (
    <div>
      {gameResultSwitch ? (
        <Game
          question={question}
          answers={answers}
          narrrowDownAnswer={narrrowDownAnswer}
          correct1={correct1}
          correct2={correct2}
          correct3={correct3}
          correct4={correct4}
          check1={check1}
          check2={check2}
          check3={check3}
          check4={check4}
          changeQuestions={changeQuestions}
          score={score}
          questionNumber={questionNumber}
          resetQuestionAnswers={resetQuestionAnswers}
          disabled={disabled}
          nextBtn={nextBtn}
          modalSwitch={modalSwitch}
        />
      ) : (
        <Result
          score={score}
          questionNumber={questionNumber}
          resetQuestionAnswers={resetQuestionAnswers}
        />
      )}
    </div>
  );
};

export default Main;
