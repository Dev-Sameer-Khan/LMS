import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    getcategories: builder.query({
      query: () => "cateogries",
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetcategoriesQuery } = catApi;
