exports.successResponse = function (message, data) {
  return {
    statusCode: 200,
    data: data,
    message: message,
  };
};

exports.createdResponse = function (message, data) {
  return {
    statusCode: 201,
    data: data,
    message: message,
  };
};

exports.customResponse = function shorten(arr, obj) {
  var newObj = JSON.parse(JSON.stringify(obj));
  arr.forEach(function (key) {
    delete newObj[key];
  });
  return newObj;
};

exports.errorResponse = function (type, message) {
  switch (type) {
    case "badRequest":
      return {
        statusCode: 400,
        error: "Bad Request",
        message: message,
      };
      break;
    case "unauthorized":
      return {
        statusCode: 401,
        error: "Unauthorized",
        message: message,
      };
      break;
    case "forbidden":
      return {
        statusCode: 403,
        error: "Forbidden",
        message: message,
      };
      break;
    case "notFound":
      return {
        statusCode: 404,
        error: "Not Found",
        message: message,
      };
      break;
    case "badImplementation":
      return {
        statusCode: 500,
        error: "Internal Server Error",
        message: message,
      };
      break;
    case "conflictError":
      return {
        statusCode: 409,
        error: "Conflict error",
        message: message,
      };
      break;
    default:
  }
};

