import React, { useState } from "react";
import { useGetPostByIdQuery } from "../posts.api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Post } from "../types";

interface initialValues extends Post {}

const FindPostById = () => {
  const newInputFieldValues: initialValues = {
    id: 1,
    userId: 1,
    title: "",
    body: "",
  };

  const [userId, setUserId] = useState(-1);

  const { data, isLoading, isError, isSuccess } = useGetPostByIdQuery(userId);

  const handleFindUserById = (values: initialValues) => {
    setUserId(values.id);
  };

  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "Please enter the valid post ID to start searching"}
      {isSuccess && data ? (
        <div>
          <p>post title: {data.title}</p>
          <p>post body: {data.body}</p>
          <p>user ID: {data.userId}</p>
        </div>
      ) : null}
      <Formik initialValues={newInputFieldValues} onSubmit={(values: initialValues) => handleFindUserById(values)}>
        <Form>
          <Field type="text" id="id" name="id" placeholder="post id" />
          <ErrorMessage name="id" component="div" className="error-message" />
          <button type="submit">Find by post ID</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FindPostById;
