import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["book"],
    }),
    getBooksById: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["book"],
    }),
    updateBookById: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    updateBooks: builder.mutation({
      query: (books) => ({
        url: `books`,
        method: "POST",
        body: books,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksByIdQuery, useUpdateBooksMutation ,useUpdateBookByIdMutation,useDeleteBooksMutation } = bookApi;
