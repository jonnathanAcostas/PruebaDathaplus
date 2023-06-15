const AWS = require("aws-sdk");

const get = async (event) => {
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
};

module.exports = {
  get,
};