import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Suggestions from "./suggestion";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users && users.length ?
        users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : []

      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);

      const response = await axios.get('https://dummyjson.com/users');

      const data = response.data;
      // console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, [])

  if (error) {
    return <div className="text-red-500 font-medium text-center py-4">Error Occurred !!</div>
  }

  // console.log(users, filteredUsers);

  return <div className="w-full max-w-[500px] min-h-[280px] flex flex-col items-center py-4 bg-white mx-auto mt-8 border-4 border-cyan-500 px-4">
    {
      loading ?
        <h1 className="text-center text-gray-700 font-semibold py-4">Loading Data ! Please Wait</h1>
        : (
          <input
            type="text"
            value={searchParam}
            name="search-users"
            placeholder="Search Users here..."
            onChange={(e) => handleChange(e)}
            className="w-full max-w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent shadow-sm"
          />
        )
    }

    {
      showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />
    }
  </div>
}