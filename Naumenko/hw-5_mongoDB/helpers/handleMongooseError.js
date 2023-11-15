export const handleMongooseError = (error, data, next) => {
  console.log("error:", error);
  const { name, code } = error;
  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  console.log("status:", status);
  error.status = status;
  next();
};
