const TodoInput = (props) => {
  // 화면에 데이터를 Rendering 할때 사용할 State(변수) 선언
  // const [content, setContent] = useState("");

  // const [n1, n2] = ["대한민국","우리나라"]
  const { todo, setTodo, todoInput } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    // setContent(value);
    setTodo({ ...todo, content: value });
  };

  const btnClickHandler = (e) => {
    // 추가 버튼을 클릭했을때 할일
    todoInput(todo.content);
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={todo.content}
        onChange={inputChangeHandler}
      />

      <button
        onClick={btnClickHandler}
        disabled={todo.content.length < 2}
        className={todo.id ? "update" : ""}
      >
        {todo.id ? "수정" : "저장"}
      </button>
    </div>
  );
};

export default TodoInput;
