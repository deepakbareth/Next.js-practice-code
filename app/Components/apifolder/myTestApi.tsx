"use client";
import { useEffect, useState } from "react";

type ProfileApiProps = {
  id: string;
};


export default  function MyTestApi({ id }: ProfileApiProps) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const profilePost = data.find(
          (item: any) => item.id === Number(id)
        );

        setPost(profilePost || null);
      });
  }, [id]);

  return (
    <>

      <h1 style={{ fontSize: "2rem", padding: "10px" }}>
        This title is coming from server becouse we are racticing API calls
      </h1>

      <h1 style={{ fontSize: "2rem", padding: "10px" }}>
        Title of post  :  {post ? post.title : "Loading..."}
      </h1>
      
    </>

  );
}




