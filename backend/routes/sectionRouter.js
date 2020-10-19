const express = require('express');
const bodyParser = require('body-parser');

const Sections = require('../models/sections');

const sectionRouter = express.Router();
sectionRouter.use(bodyParser.json());

sectionRouter.route('/sections')
    .get((req, res, next) => {
        Sections.find({})
            .then((section) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(section);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Sections.create(req.body)
            .then((section) => {
                console.log('Section Created: ', section);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(section);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

sectionRouter.route('/sections/:sectionId')
    .get((req, res, next) => {
        Sections.findById(req.params.sectionId)
            .then((section) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(section);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Sections.remove({'_id': req.params.sectionId})
            .then((section) => {
                console.log('Section removed: ', section);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(section);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = sectionRouter;
