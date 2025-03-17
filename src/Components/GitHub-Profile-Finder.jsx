import { useEffect, useState } from "react";
import User from "./GitUserCard.jsx";

export default function GitHubProfileFinder() {
  const [username, setUserName] = useState("10Vaibhav");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="flex flex-col py-4 items-center space-y-5 bg-green-100 w-full max-w-[700px] min-h-[450px] px-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <input
          className="w-full sm:w-[300px] h-[40px] px-4 py-2 border-3 rounded-md border-black"
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 sm:ml-4 active:bg--700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none"
        >
          Search
        </button>
      </div>
      {loading ? (
        <h1>Loading Data! Please wait</h1>
      ) : userData !== null ? (
        <User user={userData} />
      ) : null}
    </div>
  );
}
