import React from "react";
import Game from "./Game";
import Result from "./Result";

interface PROPS {
  question: string;
  answers: string[];
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  score: number;
  questionNumber: number;
  qaSwitch: boolean;
  resetQuestionAnswers: VoidFunction;
  restartQuestionAnswers: VoidFunction;
}

const Main: React.FC<PROPS> = ({
  question,
  answers,
  check1,
  check2,
  check3,
  check4,
  score,
  questionNumber,
  qaSwitch,
  resetQuestionAnswers,
  restartQuestionAnswers,
}) => {
  return (
    <div>
      {qaSwitch ? (
        <Game
          question={question}
          answers={answers}
          check1={check1}
          check2={check2}
          check3={check3}
          check4={check4}
          score={score}
          questionNumber={questionNumber}
          restartQuestionAnswers={restartQuestionAnswers}
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
