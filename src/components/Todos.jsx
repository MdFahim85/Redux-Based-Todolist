import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todo/todoSlice";
import Button from "./Button";
import { useState } from "react";
import Filter from "./Filter";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const [filter, setFilter] = useState(true);
  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });
  const dispatch = useDispatch();
  return (
    <>
      <ul className="flex gap-5 ">
        {todos.length ? (
          filtered.length ? (
            filtered.map((todo) => (
              <li key={todo.id} className="flex items-center gap-3">
                <p className={`px-2 ${todo.completed ? "line-through" : ""}`}>
                  {todo.title}
                </p>
                <Button
                  className={`border-gray-100 border-1 text-white px-2 py-1 rounded`}
                  dispatchHandler={() => dispatch(toggleTodo(todo))}
                  text={todo.completed ? "❌" : "✔️"}
                />
                <Button
                  className={`bg-red-400 hover:bg-red-600 px-2 py-1 rounded`}
                  dispatchHandler={() => dispatch(removeTodo(todo))}
                  text={`Delete`}
                />
              </li>
            ))
          ) : (
            <p>No task found</p>
          )
        ) : (
          <p>Add a new task</p>
        )}
      </ul>
      <Filter setFilter={setFilter} />
    </>
  );
}

export default Todos;
