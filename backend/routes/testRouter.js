const express = require('express');
const bodyParser = require('body-parser');

const Tests = require('../models/tests');

const testRouter = express.Router();
testRouter.use(bodyParser.json());

testRouter.route('/tests')
    .get((req, res, next) => {
        Tests.find({})
            .then((test) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(test);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Tests.create(req.body)
            .then((test) => {
                console.log('Test Created: ', test);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(test);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

testRouter.route('/tests/:testId')
    .get((req, res, next) => {
        Tests.findById(req.params.testId)
            .then((test) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(test);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Tests.remove({'_id': req.params.testsId})
            .then((test) => {
                console.log('Test Removed: ', test);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(test);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = testRouter;
