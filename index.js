const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
// requiring passport and strategy
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store session cookie in the dp
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },
    function (err) {
        console.log(err || 'connect-mongo setup ok')
    })
}));

// passport configuration
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// using flash messages
app.use(flash());
app.use(customMware.setFlash);
// use express router
app.use('/', require('./routes'));



app.get('/',function(req,res){
    return res.end('<h1>HI</h1>');
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})