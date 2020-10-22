const express = require('express');
const bodyParser = require('body-parser');
const Logs = require('../models/logs');

const logRouter = express.Router();
logRouter.use(bodyParser.json());

logRouter.route('/logs')
    .get((req, res, next) => {
        Logs.find({})
            .then((log) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(log);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Logs.create(req.body)
            .then((log) => {
                console.log('Log Created: ', log);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(log);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

logRouter.route('/logs/:logId')
    .get((req, res, next) => {
        Logs.findById(req.params.logId)
            .then((log) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(log);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Logs.remove({'_id': req.params.logId})
            .then((log) => {
                console.log('Log Removed: ', log);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(log);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

logRouter.route('/user/:userId/logs')
    .get((req, res, next) => {
        Logs.find({userId: req.params.userId})
            .then((logs) => {
                console.log("Debug in logRouter: ", logs);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(logs);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = logRouter;
