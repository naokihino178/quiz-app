import React from "react";
import { Button } from "@material-ui/core";

interface PROPS {
  answers: string[];
  check1: VoidFunction;
  check2: VoidFunction;
  check3: VoidFunction;
  check4: VoidFunction;
}

const Answers: React.FC<PROPS> = ({
  answers,
  check1,
  check2,
  check3,
  check4,
}) => {
  return (
    <div className="answersContainer">
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check1}
        id="button1"
      >
        {answers[0]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check2}
        id="button2"
      >
        {answers[1]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check3}
        id="button3"
      >
        {answers[2]}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="buttonSize"
        onClick={check4}
        id="button4"
      >
        {answers[3]}
      </Button>
    </div>
  );
};

export default Answers;
