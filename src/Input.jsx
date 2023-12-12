import { useState, useRef } from "react";

export default function Input({ onAddTodo }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  function handleClick() {
    text.trim() ? onAddTodo(text) : alert("Please type something...!");
    setText("");
    inputRef.current.focus();
  }

  return (
    <div className="flex items-center">
      <input
        ref={inputRef}
        type="text"
        name="text"
        value={text}
        className="flex-1 border border-black p-1"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-black p-1" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
