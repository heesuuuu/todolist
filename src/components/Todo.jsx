"use client";

import React, { useEffect, useState } from "react";
import TodoHd from "./TodoHd";
import TodoEditor from "./TodoEditer";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  //마운트시
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    //todo 상태에 저장
    setTodos(savedTodos);
  }, []);

  //todos 업데이트 시
  useEffect(() => {
    //로컬스토리지에 데이터를 저장
    // JSON.stringify():자바스크림트 값이나 객체를 JSON 문자열로 변환
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos]);

  // 할 일 추가하는 함수
  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // 완료 표시 함수
  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  // 할 일 삭제 함수
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 p-8 pb-40">
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
