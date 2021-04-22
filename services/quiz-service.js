const quizzes = require("./quizzes.json")
const quizDao = require("../daos/quizzes-dao");

const findAllQuizzes = () => {
    quizDao.findAllQuizzes();
}
const findQuizById = (qid) => {
    quizDao.findQuizById(qid)

}

module.exports = {
    findAllQuizzes, findQuizById,

}
