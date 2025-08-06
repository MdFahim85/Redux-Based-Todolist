import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Button from "./Button";

function AddTodo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  function handleAdd() {
    if (task.length) {
      dispatch(addTodo(task));
      setTask("");
    }
  }
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center p-2 rounded my-5"
    >
      <input
        type="text"
        value={task}
        placeholder="Add your Task"
        className="outline-1 outline-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 px-2 rounded"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        className={`bg-green-300 hover:bg-green-500 px-2 py-1 mx-2 rounded`}
        dispatchHandler={handleAdd}
        text={`Add`}
      />
    </form>
  );
}

export default AddTodo;
