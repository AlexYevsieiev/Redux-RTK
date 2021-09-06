import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./types";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    addPost: builder.mutation<Post, Partial<Post>>({
      query(body: any) {
        return {
          url: `posts`,
          method: "POST",
          body,
        };
      },
    }),

    getPosts: builder.query<Array<Post>, void>({
      query: () => `posts`,
    }),

    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),

    updatePost: builder.mutation<Post, Partial<Post>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body,
        };
      },
    }),

    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi;
