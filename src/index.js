const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const methodOverride = require('method-override');
const flash = require('connect-flash');



//Inicializaciones
const app = express();
require('./database');


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'))  
})
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Routers
app.use(require('./routers/index'));
app.use(require('./routers/notes'));
app.use(require('./routers/users'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});