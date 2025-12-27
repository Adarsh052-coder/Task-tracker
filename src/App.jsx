import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { getTasks, saveTasks } from "./services/taskService";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [tasks, setTasks] = useState(() => getTasks());
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const [search, setSearch] = useState("");

  const [theme, setTheme] = useState("light");

  const debouncedSearch = useDebounce(search);

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const visibleTasks = tasks
    .filter((t) => (filter === "all" ? true : t.status === filter))
    .filter((t) =>
      t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) =>
      sort === "title"
        ? a.title.localeCompare(b.title)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div
      className="
        min-h-screen transition-colors duration-300
        bg-zinc-100 text-gray-900
        dark:bg-black dark:text-white
      "
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="
            w-full max-w-xl p-5 rounded-2xl space-y-4 shadow-lg
            bg-zinc-50
            dark:bg-zinc-900
          "
        >
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Task Tracker</h1>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <TaskForm onSubmit={(task) => setTasks((p) => [...p, task])} />
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          <TaskList
            tasks={visibleTasks}
            onDelete={(id) =>
              setTasks((p) => p.filter((t) => t.id !== id))
            }
            onToggle={(id) =>
              setTasks((p) =>
                p.map((t) =>
                  t.id === id
                    ? {
                        ...t,
                        status:
                          t.status === "done" ? "pending" : "done",
                      }
                    : t
                )
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
