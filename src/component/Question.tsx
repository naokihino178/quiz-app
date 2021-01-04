import React from "react";
// Propsの型
interface PROPS {
  question: string;
}

const Question: React.FC<PROPS> = ({ question }) => {
  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
