const AWS = require("aws-sdk");
const uuid = require("uuid");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

class CourseRepository {
  async createCourse(course, description, price) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v4(),
        course: course,
        description: description,
        price: price,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      },
    };

    await dynamoDb.put(params).promise();

    return params;
  }

  async updateCourse(course, description, price, id) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
      ExpressionAttributeValues: {
        ":course": course,
        ":description": description,
        ":price": price,
        ":updatedAt": new Date().getTime(),
      },
      UpdateExpression:
        "SET course = :course, description = :description, price = :price, updatedAt = :updatedAt",
      ReturnValues: "ALL_NEW",
    };

    return dynamoDb.update(params).promise();
  }

  async deleteCourse(id) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
    };

    return await dynamoDb.delete(params).promise();
  }

  async getCourseById(id) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
    };
    return await dynamoDb.get(params).promise();
  }

  async getCourses() {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
    };

    return await dynamoDb.scan(params).promise();
  }
}

module.exports = CourseRepository;
