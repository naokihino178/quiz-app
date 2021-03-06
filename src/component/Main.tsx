import React from "react";
import Game from "./Game";
import Result from "./Result";

interface PROPS {
  question: string;
  answers: string[];
  narrrowDownAnswer: VoidFunction;
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  score: number;
  questionNumber: number;
  gameResultSwitch: boolean;
  resetQuestionAnswers: VoidFunction;
  disabled: boolean;
}

const Main: React.FC<PROPS> = ({
  question,
  answers,
  narrrowDownAnswer,
  check1,
  check2,
  check3,
  check4,
  score,
  questionNumber,
  gameResultSwitch,
  resetQuestionAnswers,
  disabled,
}) => {
  return (
    <div>
      {gameResultSwitch ? (
        <Game
          question={question}
          answers={answers}
          narrrowDownAnswer={narrrowDownAnswer}
          check1={check1}
          check2={check2}
          check3={check3}
          check4={check4}
          score={score}
          questionNumber={questionNumber}
          resetQuestionAnswers={resetQuestionAnswers}
          disabled={disabled}
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
