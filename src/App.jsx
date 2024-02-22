import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { filterAtom, todosAtom } from "./store/atoms/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Todo></Todo>
      </RecoilRoot>
    </>
  );
}

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

  const filterTodos = todos.filter((todo) => {
    const searchString = filter.toLowerCase();
    return (
      todo.title.toLowerCase().includes(searchString) ||
      todo.description.toLowerCase().includes(searchString)
    );
  });

  const adding = () => {
    setTodos((prevTodos) => [...prevTodos, { title, description }]);
    // Clear input fields after adding todo
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={adding}>Add Todo</button>
      <br />
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {filterTodos.map((todo, index) => (
        <SingleTodo
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}

function SingleTodo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
}

export default App;
