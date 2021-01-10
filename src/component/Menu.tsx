import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface PROPS {
  changeQuestions: VoidFunction;
}

const Menu: React.FC<PROPS> = ({ changeQuestions }) => {
  return (
    <>
      <h1>クイズ</h1>
      <h3>目指せ全問正解！</h3>
      <div className="flexRow">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/main"
          onClick={changeQuestions}
        >
          クイズを始める
        </Button>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/edit"
        >
          問題を編集する
        </Button>
      </div>
    </>
  );
};

export default Menu;
