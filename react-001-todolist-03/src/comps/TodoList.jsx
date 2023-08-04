import TodoItem from "./TodoItem";

// 추가된 TodoList 배열의 리스트를 화면에 출력하는 Component
const TodoList = (props) => {
  // const [todoList, setTodoList] = useState([...SampleData]);
  const { todoList, itemComplete, itemDelete, updateItemSelect } = props;

  const todoItemList = todoList.map((todo) => {
    return (
      <TodoItem
        item={todo}
        key={todo.id}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return <>{todoItemList}</>;
};

export default TodoList;
