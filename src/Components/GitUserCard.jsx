export default function User({ user }) {
  const {
    name,
    login,
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
  } = user;

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md max-w-md">

      <div className="mb-4">
        <img
          src={avatar_url}
          alt={`${login}'s avatar`}
          className="w-32 h-32 rounded-full border-4 border-orange-600"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold">{name || login}</h2>
        <p className="text-gray-600 mb-2">@{login}</p>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          View GitHub Profile
        </a>
      </div>

      <div className="flex justify-around w-full mt-4">
        <div className="text-center">
          <p className="font-bold">{followers}</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>

        <div className="text-center">
          <p className="font-bold">{following}</p>
          <p className="text-sm text-gray-600">Following</p>
        </div>

        <div className="text-center">
          <p className="font-bold">{public_repos}</p>
          <p className="text-sm text-gray-600">Repositories</p>
        </div>
      </div>

    </div>
  );
}
