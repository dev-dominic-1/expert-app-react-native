import ApiConnection from "./ApiConnection";
import User from "../User";

export default class UserConnection extends ApiConnection<User> {
  #request!: UserConnection;

  constructor() {
    super("User");
  }

  getAll = () => {
    return this.withMethod("GET").withEndpoint("User").withQueryParameters({});
  };

  getById = (id: number): this => {
    this.#request = this.withMethod("GET")
      .withEndpoint(["User", "GetById"])
      .withQueryParameters({ id });
    return this;
  };
}
