import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHealthcheck: build.query<
      GetHealthcheckApiResponse,
      GetHealthcheckApiArg
    >({
      query: () => ({ url: `/healthcheck` }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: () => ({ url: `/users` }),
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetHealthcheckApiResponse =
  /** status 200 health check */ HealthCheckResponse;
export type GetHealthcheckApiArg = void;
export type GetUsersApiResponse =
  /** status 200 Get list of all registered users. */ GetAllUsersResponse;
export type GetUsersApiArg = void;
export type PostUsersApiResponse =
  /** status 201 Create new user. */ CreateUserResponse;
export type PostUsersApiArg = {
  createUserRequest: CreateUserRequest;
};
export type HealthCheckResponse = {
  data?: string;
};
export type GetAllUsersResponse = {
  /** list of all users. */
  data?: object[];
  /** additional message for response. */
  message?: string;
};
export type Error = {
  /** error message. */
  message?: string;
};
export type CreateUserResponse = {
  data?: object;
};
export type CreateUserRequest = {
  /** name for created user. */
  username?: string;
  /** role for created user. */
  role?: string;
};
export const {
  useGetHealthcheckQuery,
  useGetUsersQuery,
  usePostUsersMutation,
} = injectedRtkApi;
