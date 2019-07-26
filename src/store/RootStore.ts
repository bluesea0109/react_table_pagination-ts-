import { endpoints } from "../lib/endpoints";
import PromiseStore from "./PromiseStore";
import UserStore from "./UserStore";
import NotificationStore from "./NotificationStore";

class RootStore {
  notification: NotificationStore;
  test: PromiseStore;
  getUsers: UserStore;
  loginUser: UserStore;
  postUser: UserStore;
  resetPassword: UserStore;
  forgotPassword: UserStore;
  newTestForm: PromiseStore;
  newCaseForm: PromiseStore;
  form: { [key: string]: PromiseStore };

  constructor() {
    this.notification = new NotificationStore(endpoints.get_test, null, this);
    this.test = new PromiseStore(endpoints.get_test, null, this);
    this.getUsers = new UserStore(endpoints.get_users, null, this);
    this.loginUser = new UserStore(endpoints.post_login, null, this);
    this.postUser = new UserStore(endpoints.post_user, null, this);
    this.resetPassword = new UserStore(
      endpoints.post_reset_password,
      null,
      this
    );
    this.forgotPassword = new UserStore(
      endpoints.post_forgot_password,
      null,
      this
    );
    this.form = {
      newTestForm: this.newTestForm = new PromiseStore(
        endpoints.new_test_form,
        null,
        this
      ),
      newCaseForm: this.newCaseForm = new PromiseStore(
        endpoints.new_case_form,
        null,
        this
      )
    };
  }

  init = () => {
    console.log("APP Init");
  };
}

export default RootStore;
