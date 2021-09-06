import React from "react";
import { useGetPostsQuery } from "../posts.api";

const AllPostsList = () => {
  const { data, isLoading, isSuccess, isError } = useGetPostsQuery();

  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "Looks like there is an error..."}
      {isSuccess && data
        ? data.map((post) => (
            <h2 key={post.id}>
              {post.title} - {post.body}
            </h2>
          ))
        : null}
    </div>
  );
};

export default AllPostsList;
