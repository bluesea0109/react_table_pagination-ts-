interface IEndpoints {
  [key: string]: IEndpoint;
}
export const endpoints: IEndpoints = {
  get_test: {
    method: "GET",
    uri: "/"
  },
  get_users: {
    method: "GET",
    uri: "/users"
  },
  post_login: {
    method: "POST",
    uri: "/api/users/login"
  },
  post_user: {
    method: "POST",
    uri: "/api/users/create"
  },
  post_reset_password: {
    method: "POST",
    uri: "/api/users/reset-password"
  },
  post_forgot_password: {
    method: "POST",
    uri: "/api/users/forgot-password"
  },
  new_test_form: {
    method: "POST",
    uri: "/api/users"
  },
  new_case_from: {
    method: "POST",
    uri: "/api/cases"
  }
};
