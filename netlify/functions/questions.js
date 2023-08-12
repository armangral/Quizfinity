const questionsData = require("./questions.json");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

exports.handler = async function (event, context) {
  try {
    const allQuestions = questionsData.questions;
    const shuffledQuestions = shuffleArray(allQuestions);
    return {
      statusCode: 200,
      body: JSON.stringify({ questions: shuffledQuestions.slice(0, 10) }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`, // message property will give you a more readable error
    };
  }
};
