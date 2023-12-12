export default function Indicators({ todos }) {
  const checkedItemsLength = todos.filter((todo) => todo.done).length;

  return (
    <div className="flex justify-between items-center">
      <p className="text-black font-bold">Your List</p>
      <div className="inline-flex justify-center items-center bg-black text-white px-4 py-0.5 rounded-full">
        Done {checkedItemsLength}/{todos.length}
      </div>
    </div>
  );
}
