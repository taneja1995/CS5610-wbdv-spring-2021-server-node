const questionService = require("../daos/questions-dao");

module.exports = (app) => {


    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions()
        // res.send(questions)
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // const questions = questionService.findQuestionsForQuiz(quizId);
        // res.send(questions);
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsById = (req, res) => {
        const questionId = req.params['qid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        questionService.findQuestionById(questionId)
            .then((ques) => {
                res.send(ques)
            })
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get("/api/questions/:qid",findQuestionsById);
}