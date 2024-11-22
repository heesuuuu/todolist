import React from "react";

const TodoEditer = () => {
  return (
    <div>
      <strong>새로운 Todo 작성하기</strong>
      <input type="text" placeholder="할 일을 추가로 입력해 주세요."></input>
      <button>할 일 추가</button>
    </div>
  );
};

export default TodoEditer;
