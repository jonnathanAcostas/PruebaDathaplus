const uuid = require("uuid");
const AWS = require("aws-sdk");

const update = async (event) => {
    const postulantHeader = event.headers['postulant'];
if (postulantHeader === "You're the best") {
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
}
else{
    // Propiedad personalizada o valor incorrectos, enviar una respuesta de error
    return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Unauthorizer' }),
      };
}
};

module.exports = {
  update,
};