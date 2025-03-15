export default function Suggestions({ data, handleClick }) {
  return (
    <ul className="mt-1 w-[250px] border border-gray-300 rounded-lg shadow-md bg-white max-h-60 overflow-y-auto">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              className="px-3 py-1 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0"
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}