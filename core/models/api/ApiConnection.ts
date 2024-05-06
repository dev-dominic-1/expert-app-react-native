export const API_BASE_URL = "https://expertappapi.azurewebsites.net";
export const API_BASE_URL_DEV = "https://localhost:7088";

interface QueryParameters {
  [key: string]: any;
}

// Debug mode switch
const USE_DEV = false;

export default class ApiConnection<T> {
  #method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" = "GET";
  #endpoint!: string;
  #queryParameters: string = "";

  #setEndpoint = (endpoint: string | string[]): void => {
    if (Array.isArray(endpoint)) this.#endpoint = endpoint.join("/");
    else this.#endpoint = endpoint;
  };

  #setQueryParameters = (params: QueryParameters): void => {
    let paramArray: string[] = [];
    for (let key in params) {
      paramArray.push(`${key}=${params[key]}`);
    }
    this.#queryParameters = paramArray.join("&");
  };

  constructor(endpoint: string | string[]) {
    this.#setEndpoint(endpoint);
  }

  withEndpoint = (endpoint: string | string[]): this => {
    this.#setEndpoint(endpoint);
    return this;
  };

  withMethod = (method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"): this => {
    this.#method = method;
    return this;
  };

  withQueryParameters = (params: QueryParameters): this => {
    this.#setQueryParameters(params);
    return this;
  };

  addQueryParameters = (params: QueryParameters): this => {
    const store = this.#queryParameters;
    this.#setQueryParameters(params);
    this.#queryParameters = [store, this.#queryParameters].join("&");
    return this;
  };

  sendRequest = async (): Promise<T | T[]> => {
    return new Promise<T | T[]>((resolve, reject) => {
      fetch(
        `${USE_DEV ? API_BASE_URL_DEV : API_BASE_URL}/${this.#endpoint}?${this.#queryParameters}`,
        {
          method: this.#method,
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        },
      )
        .then((r) => resolve(r.json()))
        .catch((err) => reject([]));
    });
  };
}
