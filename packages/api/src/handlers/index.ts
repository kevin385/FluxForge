import { ErrorHandler, NotFoundHandler } from "hono";
import { HTTPException } from "hono/http-exception";

export const errorHandler: ErrorHandler = (error, c) => {
  let status = 500;
  let responseMessage = "Something went wrong. Please try again later.";

  if (error instanceof HTTPException) {
    status = error.status;
    responseMessage = error.message;
  } else if (error instanceof Error) {
    // Handle generic JavaScript errors
    console.error("Unhandled Generic JS Error. Please update to HTTPException.");
  } else {
    console.error("Unhandled Error. Please update to HTTPException");
  }

  const isClientError = status >= 400 && status < 500;
  const isUnauthorizedError = status === 401;

  if (!isUnauthorizedError) {
    const errorDetails = {
      message: error.message,
      name: error.name,
      stack: error.stack
    };

    if (isClientError) console.warn("Client Error: ", errorDetails);
    else console.warn("Server Error: ", errorDetails);
  }

  return c.json({ message: responseMessage }, { status });
};

export const notFound: NotFoundHandler = c => c.json({ message: "Not found." }, { status: 404 });
