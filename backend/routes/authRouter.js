const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/users');

const router = express.Router();
router.use(bodyParser.json());

// Register
router.post('/users/signup', (req, res) => {
    User.create(req.body)
        .then((user) => {
            console.log("User registered", user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => console.log(err))
        .catch(err => console.log(err));
});

// Logout
router.get('/users/logout', (req, res, next) => {

});

router.get('/users', (req, res, next) => {
    User.find({})
        .then((users) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        },(err) => next(err))
        .catch((err) => next(err));
});

router.get('/users/:userId', (req, res, next) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        },(err) => next(err))
        .catch((err) => next(err));
});

module.exports = router;


// Login
// router.post('/users/login', (req, res, next) => {
//     let promise = new Promise((resolve, reject) => {
//         User.findByEmail(req.body.email)
//             .then((user) =>{
//                 User.findByPassword(req.body.password)
//                     .then((user) => {
//                         resolve({
//                             status: "authorized",
//                             data: user
//                         })
//                     }, (err) =>{
//                         resolve({
//                             status: "unauthorized",
//                             data: "Password does not match"
//                         })
//                     })
//             })
//         if (!req.user) {
//             let err = {
//                 'status': null
//             };
//             resolve(err);
//         }
//         else {
//             let data = {
//                 'status': req.user
//             }
//             resolve(data);
//         }
//
//     });
//         p.then((data) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(data);
//         }, (err) => next(err))
//         .catch((err) => next(err));
// });


// router.get('/user/getUser', (req, res, next) =>{
//     let p = new Promise((resolve, reject) => {
//         if (!req.user) {
//             let err = {
//                 'status': null
//             };
//             resolve(err);
//         }
//         else {
//             let data = {
//                 'status': req.user
//             }
//             resolve(data);
//         }
//
//     })
//         .then((data) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(data);
//         }, (err) => next(err))
//         .catch((err) => next(err));
// })
