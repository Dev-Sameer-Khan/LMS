import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const setUserIdToLocalStorage = (id) => {
  window.localStorage.setItem("userId", JSON.stringify(id));
}
export const setUserStatusToLocalStorage = (status) => {
  window.localStorage.setItem("isAdmin", status);
}
export const getUserStatusFromLocalStorage = () => {
  const isAdmin = window.localStorage.getItem("isAdmin")
  return isAdmin
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
      providesTags: ["user"],
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["user"],
    }),
    newUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery, useNewUserMutation, useGetUserByIdQuery, useUpdateUserBookMutation } =
  userApi;
