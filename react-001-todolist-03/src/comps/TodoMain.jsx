import TodoInput from "./TodoInput";
import { useEffect, useState } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";

// initData.js 에서 export 한 함수들 중에서
// initData() 함수만 필요하니 구조분해를 통하여 import
import { initData } from "../data/initData";
// uuid()
// react-uuid의 export type이 무엇일까
import uuid from "react-uuid";

// dto.initData()
// dto.func1()
// import dto from "../data/initData"

const TodoMain = () => {
  // initData() 함수를 실행하여
  // initData() 함수가 생성한(return 한) 객체로 todo 를 초기화
  const [todo, setTodo] = useState(() => initData());

  // const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("Use Effect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  // 입력한 TodoContent 를 사용하여 새로운 Todo 추가하기
  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };

  // Todo 완료처리
  const itemComplete = (id) => {
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        // todo.complete 속성을 반전(NOT)시키기
        // true 이면 false, false 이면 true
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    // id 에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제 할거야?")) {
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  // Content 를 클릭했을때 선택된 item 을 찾아주는 함수
  const updateItemSelect = (id) => {
    // 전달받은 id 값은 PK 적인 성질을 가지므로
    // id 에 해당하는 List 만 추출하면 그결과는 item 이
    // 한개인 List 가 생성된다
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });
    // update 를 위한 Todo 데이터 생성
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을때
  // Update and Insert 를 실행하는 함수
  const todoInput = (content) => {
    // id 값이 null 또는 "" 이면 List 에 추가하기
    if (!todo.id) {
      todoListAdd(content);
      // id 값이 null 또는 "" 이 아니면 Update 실행
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: content };
        }
        return item;
      });
      // setState 함수
      setTodoList(updateTodoList);
    }
    // Add 또는 Update 를 실행 후 Todo 를 초기화 하기
    // setTodo(initData());
  };

  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      <TodoList
        itemDelete={itemDelete}
        todoList={todoList}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
