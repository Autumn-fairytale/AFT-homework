const errorMessageList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

export const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  console.log("error HttpError:", error);
  error.status = status;
  console.log("error.status HttpError:", error.status);
  return error;
};
