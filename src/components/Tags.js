export function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1 text-gray-700 py-2">
      {tags.map((tag) => (
        <span key={tag} className="bg-gray-100 rounded-md px-2 py-1 text-xs">
          {tag}
        </span>
      ))}
    </div>
  );
}
