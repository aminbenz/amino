export class AuthRequiredError extends Error {
  constructor(message = "Auth is required to access this page.") {
    super(message);
    this.name = "AuthRequiredError";
    this.message = message;
  }
}

export class PermissionDeniedError extends Error {
  constructor(message = "You do not have permission to access this resource.") {
    super(message);
    this.name = "PermissionDeniedError";
    this.message = message;
  }
}

export class BadRequestError extends Error {
  constructor(message = "Sorry, your request could not be processed.") {
    super(message);
    this.name = "BadRequestError";
    this.message = message;
  }
}

export class DatabaseError extends Error {
  constructor(message = "A database error occurred.") {
    super(message);
    this.name = "DatabaseError";
    this.message = message;
  }
}
