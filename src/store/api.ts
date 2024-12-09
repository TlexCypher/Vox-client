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
    getInventoryByUserId: build.query<
      GetInventoryByUserIdApiResponse,
      GetInventoryByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/inventory/${queryArg.userId}` }),
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
export type GetInventoryByUserIdApiResponse =
  /** status 200 Success to get inventory information for a specific user. */ GetInventoriesResponse;
export type GetInventoryByUserIdApiArg = {
  userId: string;
};
export type HealthCheckResponse = {
  message?: string;
};
export type User = {
  id: string;
  username: string;
  /** User's role */
  role: "admin" | "operator";
};
export type GetAllUsersResponse = {
  /** list of all users. */
  users?: User[];
};
export type Error = {
  /** error message. */
  message?: string;
};
export type CreateUserResponse = {
  userId?: string;
};
export type CreateUserRequest = {
  /** name for created user. */
  username?: string;
  /** role for created user. */
  role?: string;
};
export type Inventory = {
  /** inventory local id */
  id: string;
  /** inventory global id */
  inventoryId: string;
  categories: string[];
  productCode: string;
  productName: string;
  remarks: string[];
  remainingQuantity: number;
  representProductName: string;
  representProductCode: string;
};
export type GetInventoriesResponse = {
  /** list of all inventories. */
  inventories?: Inventory[];
};
export const {
  useGetHealthcheckQuery,
  useGetUsersQuery,
  usePostUsersMutation,
  useGetInventoryByUserIdQuery,
} = injectedRtkApi;
