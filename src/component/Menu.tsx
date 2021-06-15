import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

interface Props {
  startGame: VoidFunction;
}

const Menu: React.FC<Props> = ({ startGame }) => {
  return (
    <div className="menuContainer">
      <h1 className="title">クイズアプリ</h1>
      <div className="menuButtonContainer">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/main"
          onClick={startGame}
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
