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
}) => {
  return (
    <div>
      {qaSwitch ? (
        <>
          <Game
            question={question}
            answers={answers}
            check1={check1}
            check2={check2}
            check3={check3}
            check4={check4}
            score={score}
            questionNumber={questionNumber}
          />
        </>
      ) : (
        <Result score={score} questionNumber={questionNumber} />
      )}
    </div>
  );
};

export default Main;