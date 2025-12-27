export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div
      className="
        flex justify-between items-center p-3 rounded-xl border
        bg-gray-50 text-gray-900
        dark:bg-zinc-800 dark:text-white
        border-gray-200 dark:border-white/10
        transition
      "
    >
      <div>
        <p
          className={`font-medium ${
            task.status === "done"
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {task.title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {task.date}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="px-2 py-1 text-xs rounded border
                     hover:bg-gray-200 dark:hover:bg-white/10"
        >
          {task.status === "done" ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-2 py-1 text-xs rounded border text-red-500
                     hover:bg-red-500/10"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
