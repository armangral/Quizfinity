exports.handler = async function (event, context) {
  try {
    const questions = require("./questions.json");
    return {
      statusCode: 200,
      body: JSON.stringify(questions),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`, // message property will give you a more readable error
    };
  }
};
