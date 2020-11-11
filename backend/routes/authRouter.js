const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/users');
const passport = require('passport');

const authRouter = express.Router();
authRouter.use(bodyParser.json());

const authenticate = require('../authenticate');

authRouter.route('/user/signup')
    .post((req, res, next) => {

        //signup logic goes here

        new Promise((resolve, reject) => {
            User.find({'email': req.body.email})
                .then((user) => {
                    if(user.length !== 0){
                        resolve({
                            message: "Email already in use!",
                            ok: false,
                            user: null
                        })
                    }
                    else{
                        User.create(req.body)
                            .then((user) => {
                                resolve({
                                    message: "Successfully registered!",
                                    user: user,
                                    ok: true
                                })

                            }, (err) => next(err))
                            .catch(err => next(err));
                    }
                }, (err) => next(err))
                .catch(err => next(err));
        })
            .then((user) => {
            console.log("User created", user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        })
            .catch((err) => next(err));
});

authRouter.route('/user/login')
    .post((req, res, next) => {

        //login logic goes here
        new Promise((resolve, reject) => {
            User.findOne({'email': req.body.email, 'password': req.body.password})
                .then((user) => {
                    if(!user){
                        resolve({
                            message: "Email/Password does not match!",
                            ok: false,
                            userId: null,
                            token: null
                        })
                    }
                    else{
                        let payload = {
                            email: user.email,
                            password: user.password
                        }
                        let accessToken = authenticate.getToken(payload);
                        resolve({
                            message: "User found. Access token sent",
                            ok: true,
                            userDetail: user,
                            token: accessToken
                        })
                    }
                }, (err) => next(err))
                .catch(err => {
                    next(err);
                });
        })
            .then((response) => {

                console.log("User Match found");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch((err) => {
                next(err);
            });

    });

authRouter.route('/oauth/google')
    .post((req, res, next) => {

        //google oauth logic goes here
        new Promise((resolve, reject) => {
            User.findOne({'googleId': req.body.googleId})
                .then((user) => {
                    if(!user){
                        User.create(req.body)
                            .then((user) => {
                                console.log("Created user details: ", user);

                                let accessToken = authenticate.getToken({userId: user._id});
                                console.log("User Created. Access token: ", accessToken);
                                resolve({
                                    message: "User Created. Access token sent!",
                                    ok: true,
                                    userDetail: user,
                                    token: accessToken
                                })
                            })
                            .catch(err => next(err));
                    }
                    else{
                        let accessToken = authenticate.getToken({userId: user._id});
                        console.log("User Already created. Access token: ", accessToken);
                        resolve({
                            message: "User found. Access token sent!",
                            ok: true,
                            userDetail: user,
                            token: accessToken
                        })
                    }
                }, (err) => next(err))
                .catch(err => {
                    next(err);
                });
        })
            .then((response) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch((err) => {
                    next(err);
            });

    });

module.exports = authRouter;
