import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const handler: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        event,
        message: "hello creature ...",
      },
      null,
      2
    ),
  };
};

export default handler;
