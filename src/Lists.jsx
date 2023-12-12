import List from "./List";
import empty from "./assets/empty.svg";

export default function Lists({ todos, onChangeTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="h-80 flex justify-center items-center">
        <div className="flex flex-col space-y-4">
          <p className="text-center text-2xl text-slate-400 font-semibold">
            There is no data
          </p>
          <img
            src={empty}
            alt="Data is Empty"
            className="w-48 h-48 pointer-events-none"
          />
        </div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col space-y-6">
      {todos.map((todo) => (
        <List
          key={todo.id}
          todo={todo}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
