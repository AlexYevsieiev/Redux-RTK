import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUpdatePostMutation } from "../posts.api";

interface initialValues {
  id: number;
  title: string;
  body: string;
}

const UpdatePost = () => {
  const [updatePost] = useUpdatePostMutation();

  const newInputFieldValues: initialValues = {
    id: 1,
    title: "",
    body: "",
  };

  const handleUpdatePost = (values: initialValues) => {
    updatePost(values);
  };

  return (
    <div>
      <Formik initialValues={newInputFieldValues} onSubmit={(values: initialValues) => handleUpdatePost(values)}>
        <Form>
          <Field type="text" id="id" name="id" placeholder="post id" />
          <ErrorMessage name="id" component="div" className="error-message" />
          <Field type="text" id="title" name="title" placeholder="post title" />
          <ErrorMessage name="title" component="div" className="error-message" />
          <Field type="text" id="body" name="body" placeholder="post body" />
          <ErrorMessage name="body" component="div" className="error-message" />
          <button type="submit">Update Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdatePost;
