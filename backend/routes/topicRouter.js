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
                console.log('Topic Created ', topic);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(topic);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

topicRouter.route('/topics/:topicId')
    .get((req,res,next) => {
        Topics.findById(req.params.topicId)
            .then((topic) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(topic);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Topics.remove({'_id': req.params.topicId})
            .then((topic) => {
                console.log('Topic Deleted ', topic);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(topic);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = topicRouter;
