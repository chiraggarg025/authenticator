const express = require('express');
const router=express.Router();
const passport = require('passport');
// getting user controller
const usersController = require('../controllers/user_controller');
router.get('/profile',passport.checkAuthentication,usersController.profile);
// sign up route
router.get('/sign-up',usersController.SignUp);
// sign in route
router.get('/sign-in',usersController.SignIn);
// create new user
router.post('/create',usersController.create);
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);
// sign out
router.get('/sign-out',usersController.destroySession);
// google sign in routes
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/users/sign-in'}),usersController.createSession)


// export router


module.exports=router;