import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.18.193.66:5000/api/v1/task",
    prepareHeaders: (headers) =>
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`),
  }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: (endpoint: string) => `${endpoint}`,
    }),
    createTask: builder.mutation({
      query: ({ endpoint, body }) => ({
        url: `${endpoint}`,
        method: "POST",
        body,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
    }),
    updateTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `edit/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
