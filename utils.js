const questions = require('./questions.json');
const { Random } = require('random-js');


const getRandomQuestion = (topic) => {
    const random = new Random();

    let questionTopic = topic.toLowerCase();
    if (questionTopic === 'рандомный вопрос') {
        const questionRandomTopicArr = Object.keys(questions);
        const randomTopicKey = random.integer(0, questionRandomTopicArr.length - 1);
        questionTopic = questionRandomTopicArr[randomTopicKey];
    }
    const RandomQuestionIndex = random.integer(0, questions[questionTopic].length - 1)
        // const RandomQuestionIndex = Math.floor(Math.random() * questions[questionTopic].length);
    return {
        question: questions[questionTopic][RandomQuestionIndex],
        questionTopic,
    };

}

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id)
    if (!question.hasOptions) {
        return question.answer;
    }
    return question.options.find((option) => option.isCorrect).text;
};

module.exports = { getRandomQuestion, getCorrectAnswer }