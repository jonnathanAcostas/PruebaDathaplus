const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const deletePhone = async (event) => {
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
};

module.exports = {
  deletePhone,
};