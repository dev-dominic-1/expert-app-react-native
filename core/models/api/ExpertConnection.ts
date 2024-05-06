import ApiConnection from "./ApiConnection";
import Expert from "../Expert";

export default class ExpertConnection extends ApiConnection<Expert> {
  #request!: ExpertConnection;

  constructor() {
    super("Expert");
  }

  getAll = () => {
    return this.withMethod("GET")
      .withEndpoint("Expert")
      .withQueryParameters({});
  };

  getById = (id: number) => {
    this.#request = this.withMethod("GET")
      .withEndpoint(["Expert", "GetById"])
      .withQueryParameters({ id });
    return this;
  };
}
