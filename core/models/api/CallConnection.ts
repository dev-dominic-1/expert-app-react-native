import ApiConnection from "./ApiConnection";
import Call from "../Call";

export default class CallConnection extends ApiConnection<Call> {
  #request!: CallConnection;

  constructor() {
    super("Call");
  }

  getAll = () => {
    return this.withMethod("GET").withEndpoint("Call").withQueryParameters({});
  };

  getById = (id: number): this => {
    this.#request = this.withMethod("GET")
      .withEndpoint(["Call", "GetById"])
      .withQueryParameters({ id });
    return this;
  };

  getUpcomingCalls = (
    userId?: number,
    showMore?: boolean,
    getAll?: boolean,
  ): this => {
    const queryParameters = {
      ...(userId ? { userId } : {}),
      ...(showMore ? { showMore } : {}),
      ...(getAll ? { getAll } : {}),
    };
    this.#request = this.withMethod("GET")
      .withEndpoint(["Call", "GetUpcomingCalls"])
      .withQueryParameters(queryParameters);
    return this;
  };
}
