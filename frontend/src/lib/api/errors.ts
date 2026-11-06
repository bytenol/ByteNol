export class ApiError extends Error {
  public readonly status: number;
  public readonly data: unknown;
  public readonly headers: Headers;

  constructor(
    message: string,
    status: number,
    data: unknown,
    headers: Headers
  ) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.headers = headers;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}