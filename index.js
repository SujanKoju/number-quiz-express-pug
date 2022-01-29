const express = require('express');
const quizService = require('./services/quizService')
const app = express();


app.set('view engine', 'pug')
app.use(express.urlencoded())

app.get('/quiz', (req, res) => {
    res.render('number-quiz', {
        currentScore: 0, questions: '1,1,2,3,5', quizNumber: 1, score: 0
    });
})


app.post('/quiz', (req, res) => {
    quizService.start(req, res);
})

app.listen(8000, () => {
    console.log('--- Server is up ---');
})
