import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/auth",
  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation<any, { endpoint: string; body: any }>({
      query: ({ endpoint, body }) => ({
        url: endpoint,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthenticateMutation } = authApi;
