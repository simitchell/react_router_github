import { useLoaderData } from "react-router-dom"
import { Issue, getIssue } from "./root"

export async function loader({ params }) {
    let issue = await getIssue(params.body);
    return { issue };
}

export default function issueData() {
    const { issueData } = useLoaderData();
    return(
        <>
            <h2>Github Issue Details</h2>
            <p>{ issue.body }</p>
        </>
    )
}