import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import { db } from "../firebase"; // firebase.tsから、 const db = firebaseApp.firestore()

// questionAnswersの配列の型
interface QUESTIONANSWERS {
  question: string;
  answers: string[];
  correctAnswer: string;
  id: string;
}
// Propsの型
interface PROPS {
  questionAnswers: Array<QUESTIONANSWERS>;
  questionAnswer: any;
}

const Question: React.FC<PROPS> = ({ questionAnswers, questionAnswer }) => {
  // 問題ひとつひとつにstateを持たせる
  const [editQuestion, setEditQuestion] = useState("");
  const [editCorrectAnswer, setEditCorrectAnswer] = useState("");
  const [editAnswer1, setEditAnswer1] = useState("");
  const [editAnswer2, setEditAnswer2] = useState("");
  const [editAnswer3, setEditAnswer3] = useState("");
  const [editAnswer4, setEditAnswer4] = useState("");
  const [textField, setTextField] = useState(true);

  return (
    <div>
      <div>
        <div>
          <div className="qandaTitle">問題</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.question}
            // label={questionAnswer.question}
            autoComplete="off"
            value={editQuestion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditQuestion(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="qandaTitle">正解</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.correctAnswer}
            // label={questionAnswer.correctAnswer}
            autoComplete="off"
            value={editCorrectAnswer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditCorrectAnswer(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="qandaTitle">回答1</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.answers[0]}
            // label={questionAnswer.answers[0]}
            autoComplete="off"
            value={editAnswer1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditAnswer1(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="qandaTitle">回答2</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.answers[1]}
            // label={questionAnswer.answers[1]}
            autoComplete="off"
            value={editAnswer2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditAnswer2(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="qandaTitle">回答3</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.answers[2]}
            // label={questionAnswer.answers[2]}
            autoComplete="off"
            value={editAnswer3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditAnswer3(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="qandaTitle">回答4</div>
          <TextField
            className="textField"
            inputProps={{ style: { color: "white" } }}
            disabled={textField}
            id="outlined-basic"
            placeholder={questionAnswer.answers[3]}
            // label={questionAnswer.answers[3]}
            autoComplete="off"
            value={editAnswer4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditAnswer4(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {textField ? (
          <Button // 編集開始ボタン（何も変更せず終了ボタンを押した時に空にならないよう、stateに現在の値を格納しておく）
            onClick={() => {
              setTextField(false);
              setEditQuestion(questionAnswer.question);
              setEditCorrectAnswer(questionAnswer.correctAnswer);
              setEditAnswer1(questionAnswer.answers[0]);
              setEditAnswer2(questionAnswer.answers[1]);
              setEditAnswer3(questionAnswer.answers[2]);
              setEditAnswer4(questionAnswer.answers[3]);
            }}
          >
            <div className="colorWhite">
              <EditIcon />
              編集する
            </div>
          </Button>
        ) : (
          <Button // 編集終了ボタン
            onClick={() => {
              setTextField(true);
              db.collection("questionAnswers")
                .doc(questionAnswer.id)
                .set({
                  question: editQuestion,
                  answers: [editAnswer1, editAnswer2, editAnswer3, editAnswer4],
                  correctAnswer: editCorrectAnswer,
                  id: questionAnswer.id,
                });
            }}
          >
            <div className="colorWhite">
              <EditIcon />
              編集を終わる
            </div>
          </Button>
        )}
        <Button // 削除用ボタン
          onClick={() => {
            const check = window.confirm("本当に削除しますか？");
            if (check && questionAnswers.length !== 1) {
              db.collection("questionAnswers").doc(questionAnswer.id).delete(); // ドキュメントを削除 // 警告: ドキュメントを削除しても、そのドキュメントのサブコレクションは削除されません。（<= 公式にあった、どういうことか理解しとけ）
            } else if (check && questionAnswers.length === 1) {
              alert("問題は最低一つは用意してください");
            } else {
              return;
            }
          }}
        >
          <div className="colorWhite">
            <Delete />
            削除する
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Question;
