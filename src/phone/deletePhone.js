const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const deletePhone = async (event) => {
    const postulantHeader = event.headers['postulant'];
    if (postulantHeader === "You're the best") {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const id = v4();

  await dynamodb
    .delete({
      TableName: "PhoneTable",
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Deleted Phone'
    }
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
  deletePhone,
};