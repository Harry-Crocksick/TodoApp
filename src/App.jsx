import { useState } from "react";
import Indicators from "./Indicators";
import Input from "./Input";
import Lists from "./Lists";

const initialTodos = [
  { id: 1, title: "Do workout", done: true },
  { id: 2, title: "Listen to music", done: false },
  { id: 3, title: "Eat a burger", done: true },
];

let nextId = 4;

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: text,
        done: false,
      },
    ]);
  }

  function markAllDone(todos) {
    setTodos(
      todos.map((todo) => {
        return { ...todo, done: true };
      })
    );
  }

  function handleChangeTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(id) {
    confirm("Are you sure to delete?") &&
      setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="w-full min-h-screen my-16 p-4">
      <section className="flex flex-col space-y-4 max-w-[450px] mx-auto w-full border border-black p-4">
        <h1 className="text-black text-3xl font-bold">TodoApp</h1>
        <Input onAddTodo={handleAddTodo} />
        <Indicators todos={todos} />
        <Lists
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}
