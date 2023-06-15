const { v4 } = require("uuid");
const AWS = require("aws-sdk");


const create = async (event) => {
const postulantHeader = event.headers['postulant'];
if (postulantHeader === "You're the best") {


const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { title, description } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  console.log("created id: ", id);

  const newTask = {
    id,
    title,
    description,
    createdAt
  };

  await dynamodb
    .put({
      TableName: "PhoneTable",
      Item: newTask,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
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
  create
};