import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface PROPS {
  changeQuestions: VoidFunction;
}

const Menu: React.FC<PROPS> = ({ changeQuestions }) => {
  return (
    <div className="menuContainer">
      <h1 className="title">クイズアプリ</h1>
      <div className="menuButtonContainer">
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
    </div>
  );
};

export default Menu;
