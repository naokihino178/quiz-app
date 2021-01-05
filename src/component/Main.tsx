import React from "react";
import Question from "./Question";
import Answers from "./Answers";

interface PROPS {
  question: string;
  answers: string[];
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
  score: number;
  questionNumber: number;
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
}) => {
  return (
    <div>
      <Question question={question} />
      <Answers
        answers={answers}
        check1={check1}
        check2={check2}
        check3={check3}
        check4={check4}
      />
      <h2>{`${questionNumber}問目　現在の正解数: ${score}`}</h2>
    </div>
  );
};

export default Main;
