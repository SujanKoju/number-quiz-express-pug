function start(req, res) {
    let questions = ['1,1,2,3,5', '1,4,9,16,25', '2,3,5,7,11', '1,2,4,8,16', '5,6,8,11,15']
    let answers = [8, 36, 13, 32, 21]
    increaseScoreIfAnswerCorrect(req, answers);
    if (parseInt(req.body.quizNumber) === 5) {
        renderResultPage(res, req);
    } else {
        renderNextPage(res, req, questions);
    }
}

function increaseScoreIfAnswerCorrect(req, answers) {
    if (parseInt(req.body.answer) === answers[parseInt(req.body.quizNumber) - 1]) {
        req.body.score = parseInt(req.body.score) + 1;
    }
}
function renderResultPage(res, req) {
    res.render('result', {currentScore: req.body.score,});
}

function renderNextPage(res, req, questions) {
    res.render('number-quiz', {
        currentScore: req.body.score,
        questions: questions[req.body.quizNumber],
        quizNumber: parseInt(req.body.quizNumber) + 1,
        score: req.body.score
    });
}

module.exports.start = start;
