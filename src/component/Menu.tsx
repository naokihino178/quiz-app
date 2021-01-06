import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1>クイズ</h1>
      <h3>目指せ全問正解！</h3>
      <div className="flexRow">
        <Button color="primary" variant="contained" component={Link} to="/main">
          クイズを始める
        </Button>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/form"
        >
          問題を作成する
        </Button>
      </div>
    </>
  );
};

export default Menu;