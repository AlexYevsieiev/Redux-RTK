import React from "react";
import AddNewPost from "./add-new-post";
import AllPostsList from "./all-posts-list";
import DeletePostById from "./delete-post-by-id";
import FindPostById from "./find-post-by-id";
import UpdatePost from "./update-post";

const Posts = () => {
  return (
    <>
      <AddNewPost />
      <UpdatePost />
      <DeletePostById />
      <FindPostById />
      <AllPostsList />
    </>
  );
};

export default Posts;
