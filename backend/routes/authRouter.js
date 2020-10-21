const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/users');

const authRouter = express.Router();
authRouter.use(bodyParser.json());

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

            console.log("User created");
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        })
            .catch((err) => next(err));
});

authRouter.route('/user/login')
    .post((req, res, next) => {

        //login logic goes here


    });
module.exports = authRouter;
