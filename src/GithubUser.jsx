export function GithubUser({ username }) {
  const styleUsername = {
    color: "red",
  };

  return (
    <div>
      <p>
        Github User: <span style={styleUsername}>{username}</span>
      </p>
    </div>
  );
}
