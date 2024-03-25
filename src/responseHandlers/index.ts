import { errorMessages } from "./errorMessages";
import { httpStatusCodes } from "./statusCode";

export class BaseError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export class BadRequest extends BaseError {
  constructor(message?: string) {
    super(
      `${message}` ?? errorMessages.BAD_REQUEST,
      httpStatusCodes.BAD_REQUEST
    );
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

export class Unauthorized extends BaseError {
  constructor() {
    super(errorMessages.UNAUTHORIZED, httpStatusCodes.NOT_AUTHORIZED);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}

export class NotFound extends BaseError {
  constructor() {
    super(errorMessages.NOT_FOUND, httpStatusCodes.NOT_FOUND);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

export class Conflict extends BaseError {
  constructor() {
    super(errorMessages.CONFLICT, httpStatusCodes.CONFLICT);
    Object.setPrototypeOf(this, Conflict.prototype);
  }
}

export class InternalError extends BaseError {
  constructor() {
    super(
      errorMessages.INTERNAL_SERVER_ERROR,
      httpStatusCodes.INTERNAL_SERVER_ERROR
    );
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}
