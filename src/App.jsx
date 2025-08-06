import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <AddTodo />
      <Todos />
    </Wrapper>
  );
}

export default App;
