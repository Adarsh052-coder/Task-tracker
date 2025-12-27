export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="
        px-3 py-1 rounded-full border text-sm
        bg-gray-200 text-gray-900
        dark:bg-zinc-800 dark:text-white
      "
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
