const AWS = require("aws-sdk");

const get = async (event) => {
    const postulantHeader = event.headers['postulant'];
    if (postulantHeader === "You're the best") {
    
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "PhoneTable" }).promise();

  const tasks = result.Items;
console.log(tasks);

  return {
    status: 200,
    body: {
      tasks
    },
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
  get,
};