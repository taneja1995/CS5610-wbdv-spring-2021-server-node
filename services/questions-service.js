const questions = require("./questions.json")
const questionsDao = require("../daos/questions-dao");


const findAllQuestions = () => {
    questionsDao.findAllQuestions();
}

const findQuestionsForQuiz = (qzid) => {
    questionsDao.findQuestionsForQuiz(qzid)

}
const findQuestionById = (quid) => {
    questionsDao.findQuestionById(quid)

}
module.exports = {

    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,

}