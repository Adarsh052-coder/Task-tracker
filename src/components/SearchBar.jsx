export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="w-full p-2 border rounded"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
