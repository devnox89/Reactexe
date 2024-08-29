import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubSearchUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
      setUsername("");
    }
  };

  return (
    <div className="app-search">
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Github username" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {usernames.map((username, index) => (
          <li key={index} style={{ marginBottom: "20px", listStyleType: "none" }}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
