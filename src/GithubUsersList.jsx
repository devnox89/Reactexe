import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users`);
      if (!response.ok) {
        throw new Error("Failed to Receive datas");
      }
      const gitUser = await response.json();
      setUsers(gitUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className="app-users">
      <h2>Github user list</h2>
      {error && <p>There is an Error</p>}
      {loading && <p>Loading users...</p>}
      <Outlet />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>
              <p>{user.id}</p>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt="" style={{ width: "200px", margin: "20px" }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
