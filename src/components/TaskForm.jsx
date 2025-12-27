import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Date.now(),
      title,
      date,
      status: "pending",
    });
    setTitle("");
    setDate("");
  };

  return (
    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 p-2 rounded border
                   bg-white text-gray-900
                   dark:bg-zinc-800 dark:text-white
                   border-gray-300 dark:border-white/10"
        placeholder="Task title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="p-2 rounded border
                   bg-white text-gray-900
                   dark:bg-zinc-800 dark:text-white
                   border-gray-300 dark:border-white/10"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        className="
          px-4 py-2 rounded
          bg-black text-white
          dark:bg-white dark:text-black
        "
      >
        Add
      </button>
    </form>
  );
}
