import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const me = createApi({
  reducerPath: "me",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1.0/me" }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetMeQuery } = me;
