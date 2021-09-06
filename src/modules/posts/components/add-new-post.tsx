import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAddPostMutation } from "../posts.api";

interface initialValues {
  title: string;
  body: string;
}

const AddNewPost = () => {
  const [addPost] = useAddPostMutation();

  const newInputFieldValues: initialValues = {
    title: "",
    body: "",
  };

  const handleAddPost = (values: initialValues) => {
    addPost(values);
  };

  return (
    <div>
      <Formik initialValues={newInputFieldValues} onSubmit={(values: initialValues) => handleAddPost(values)}>
        <Form>
          <Field type="text" id="title" name="title" placeholder="post title" />
          <ErrorMessage name="title" component="div" className="error-message" />
          <Field type="text" id="body" name="body" placeholder="post body" />
          <ErrorMessage name="body" component="div" className="error-message" />
          <button type="submit">Add New Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewPost;
