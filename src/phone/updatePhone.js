const uuid = require("uuid");
const AWS = require("aws-sdk");

const update = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { done } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "PhoneTable",
      Key: { id },
      UpdateExpression: "set done = :done",
      ExpressionAttributeValues: {
        ":done": done,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "task updated",
    }),
  };
};

module.exports = {
  update,
};