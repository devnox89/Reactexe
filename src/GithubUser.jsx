import { useEffect, useState } from "react";

export function GithubUser({ username }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('User Not Found');
                }
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [username]);

    return (
        <div>
            {loading &&<p>Loading...</p>}
            {error && <p>There's an Error</p>}
            {data && (
                <div>
                    <img src={data.avatar_url} alt={`${data.login}'s avatar`} width={100} />
                    <h1>{data.name}</h1>
                    <h2>@{data.login}</h2>
                </div>
            )}
        </div>
    );
}
