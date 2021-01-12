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
  resetQuestionAnswers: VoidFunction;
}

const QandA: React.FC<PROPS> = ({ questionAnswer, resetQuestionAnswers }) => {
  // 問題ひとつひとつにstateを持たせる
  const [editQuestion, setEditQuestion] = useState("");
  const [editCorrectAnswer, setEditCorrectAnswer] = useState("");
  const [editAnswer1, setEditAnswer1] = useState("");
  const [editAnswer2, setEditAnswer2] = useState("");
  const [editAnswer3, setEditAnswer3] = useState("");
  const [editAnswer4, setEditAnswer4] = useState("");

  return (
    <div>
      <div>
        <div>
          <div className="flexRow">
            <div className="qandaTitle">問題</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.question}
              value={editQuestion}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditQuestion(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
          <div className="flexRow">
            <div className="qandaTitle">正解</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.correctAnswer}
              value={editCorrectAnswer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditCorrectAnswer(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
          <div className="flexRow">
            <div className="qandaTitle">回答1</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.answers[0]}
              value={editAnswer1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditAnswer1(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
          <div className="flexRow">
            <div className="qandaTitle">回答2</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.answers[1]}
              value={editAnswer2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditAnswer2(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
          <div className="flexRow">
            <div className="qandaTitle">回答3</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.answers[2]}
              value={editAnswer3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditAnswer3(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
          <div className="flexRow">
            <div className="qandaTitle">回答4</div>
            <TextField
              className="textField"
              id="outlined-basic"
              label={questionAnswer.answers[3]}
              value={editAnswer4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditAnswer4(e.target.value);
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </div>
        </div>
        <div>
          <Button>
            <EditIcon // 編集用ボタン
              onClick={() => {
                db.collection("questionAnswers")
                  .doc(questionAnswer.id)
                  .set({
                    question: editQuestion,
                    answers: [
                      editAnswer1,
                      editAnswer2,
                      editAnswer3,
                      editAnswer4,
                    ],
                    correctAnswer: editCorrectAnswer,
                    id: questionAnswer.id,
                  });
              }}
            />
          </Button>
          <Button // 削除用ボタン
            onClick={() => {
              window.confirm("本当に削除しますか？");
              db.collection("questionAnswers").doc(questionAnswer.id).delete(); // ドキュメントを削除 // 警告: ドキュメントを削除しても、そのドキュメントのサブコレクションは削除されません。（<= 公式にあった、どういうことか理解しとけ）
            }}
          >
            <Delete />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QandA;
