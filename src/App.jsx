import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUsersList";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubSearchUsers } from "./GithubSearchUser";

export function App() {
  return (
    <BrowserRouter>
      <div className="app-main">
        <ul className="app-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to={"/search"}>User Search</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/search" element={<GithubSearchUsers />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<p>Error: page not Found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
