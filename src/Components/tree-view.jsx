import { useState } from "react";

export default function TreeView({ menus = [] }) {
  return (
    <div className="max-w-lg w-full rounded-xl shadow-lg p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
      <MenuList list={menus} />
    </div>
  );
}

function MenuList({ list = [] }) {
  return (
    <ul className="space-y-1 pl-2">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  }

  return (
    <li className="py-1">
      <div className="flex items-center gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors duration-200">
        <p className="text-emerald-800 font-medium">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            className="w-6 h-6 flex items-center justify-center text-emerald-600 font-medium cursor-pointer hover:bg-emerald-100 rounded-full transition-colors duration-200"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? "−" : "+"}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

