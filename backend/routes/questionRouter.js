const express = require('express');
const bodyParser = require('body-parser');

const Questions = require('../models/questions');
const authenticate = require('../authenticate');

const questionRouter = express.Router();
questionRouter.use(bodyParser.json());

questionRouter.route('/questions')
    .get((req, res, next) => {
        Questions.find({})
            .then((question) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(question);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Questions.create(req.body)
            .then((question) => {
                console.log('Question Created: ', question);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(question);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

questionRouter.route('/questions/:questionId')
    .get((req, res, next) => {
        Questions.findById(req.params.questionId)
            .then((question) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(question);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Questions.remove({'_id': req.params.questionId})
            .then((question) => {
                console.log('Question removed: ', question);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(question);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

questionRouter.route('/topic/:topicId/questions/')
    .get( authenticate.verifyUser, (req, res, next) => {
        Questions.find({'topicId': req.params.topicId})
            .then((questions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(questions);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = questionRouter;
