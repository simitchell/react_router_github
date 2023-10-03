import { useLoaderData, Link, Outlet } from "react-router-dom"
import Issue from "./issue";

export async function loader() {
    const url = 'https://api.github.com/repos/facebook/create-react-app/issues';
    const issueList = await fetch(url).then(response => response.json());
    console.log("ISSUE LIST: ", issueList);
    return { issueList };
}

export async function getIssue() {
    const url = `https://api.github.com/repos/facebook/create-react-app/issues/${issue.number}`;
    const issueBody = await fetch(url).then(response => response.json());
    console.log("ISSUE BODY: ", issueBody);
    return { issueBody };
}

export default function Root() {
    const { issueList } = useLoaderData();
    return (
        <>
            <h1>Github Issues List</h1>
            <Outlet />
            <ul>
                {issueList.map((issue) => {
                    return (
                        <li key={issue.id}>
                            <Link to={`/issue/:${issue.number}`}>
                                {issue.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}