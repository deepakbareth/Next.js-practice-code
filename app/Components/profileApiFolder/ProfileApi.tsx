

export default async function ProfileApi({ id = 1 }: { id: number | string }) {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!res.ok) {
        throw new Error("API Failed");
    }
    const post = await res.json();


    return (
        <>

            <h1 style={{ fontSize: "2rem", padding: "10px" }}>
                This title is coming from server becouse we are racticing API calls
            </h1>

            <h1  className="bg-green-600 p-3 ">
                Title of post  :  {post ? post.title : "Loading..."}
            </h1>

        </>
    )
}