import React from "react";
import { useDeletePostMutation } from "../posts.api";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface initialValues {
  id: number;
}

const DeletePostById = () => {
  const newInputFieldValues: initialValues = {
    id: 1,
  };

  const [deletePost] = useDeletePostMutation();

  return (
    <div>
      <Formik initialValues={newInputFieldValues} onSubmit={(values: initialValues) => deletePost(values.id)}>
        <Form>
          <Field type="text" id="id" name="id" placeholder="post id" />
          <ErrorMessage name="id" component="div" className="error-message" />
          <button type="submit">Delete by post ID</button>
        </Form>
      </Formik>
    </div>
  );
};

export default DeletePostById;
