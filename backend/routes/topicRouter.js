const express = require('express');
const bodyParser = require('body-parser');

const Topics = require('../models/topic');

const topicRouter = express.Router();
topicRouter.use(bodyParser.json());

topicRouter.route('/topics')
    .get((req, res, next) => {
        Topics.find({})
            .then((topic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(topic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Topics.create(req.body)
            .then((topic) => {
                console.log('Test Created ', topic);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(topic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Topics.remove({})
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

topicRouter.route('/topics/:topicId')
    .get((req,res,next) => {
        Topics.findById(req.params.topicId)
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Topics.remove({'_id': req.params.topicId})
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
topicRouter.route('/topics/:topicId/questions')
    .get((req,res,next) => {
        Topics.findById(req.params.topicId)
            .then((topic) => {
                if(topic!= null){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(topic.questions);
                }
                else {
                    err = new Error('There is some error in api');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Topics.findById(req.params.topicId)
            .then((topic) => {
                if (topic != null) {
                    topic.questions.push(req.body);
                    topic.save()
                        .then((data) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(data);
                        }, (err) => next(err));
                }
                else {
                    err = new Error('Topic ' + req.params.topicId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });

topicRouter.route('/topics/:topicId/questions/:questionId')
    .get((req,res,next) => {
        Topics.findById(req.params.topicId)
            .then((topic) => {
                if(topic != null && topic.questions.id(req.params.questionId) != null){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(topic.questions.id(req.params.questionId));
                }
                else {
                    err = new Error('There is some error in api');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = topicRouter;
