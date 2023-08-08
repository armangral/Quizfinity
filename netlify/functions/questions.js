const fs = require("fs");
const path = require("path");

exports.handler = async function (event, context) {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "questions.json"),
      "utf8"
    );
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error}`,
    };
  }
};
