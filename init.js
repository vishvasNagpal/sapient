'use strict';
var async = require('async');
var routeLoader = require('./lib/config/route/routeLoader');
const execSync = require('child_process').execSync;
const gulp = require('gulp');
const logger = require("log4js").getLogger("init");



//init the app
module.exports = function(app,opts){
    logger.info('app init');


    //do something else

    app.set('views', _rootDir + '/lib/views');
    app.set('view engine', 'jade');

    enableJsxTransform();
    setUpViewHandler();
    routeLoader(app,_rootDir);
    setUpResources();

    async.parallel([

        ],
        bootstrap(app)
    )

};



function enableJsxTransform(){
    require('node-jsx').install({extension: '.jsx'});
}

function setUpViewHandler(){
    _app.use(function(req,res,next){
        addViewHandler(req,res);
        next();
    });
}
function addViewHandler(req,res){
    res.removeHeader('X-Powered-By');
    let _render = res.render;

    res.render = function(view, outputHtml, opts){
        let options = {};
        options.opts = opts;
        options.outputHtml = outputHtml;
        _render.call(res, view, options);
    }
}
function bootstrap(app){
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;

        res.render('error','page not found!', { pagetitle: err.status, message: 'page not found!'});
        next();
    });
    app.listen('3000',function(){
        console.log('listening to port 3000');
    });
}

function setUpResources() {
    execSync("gulp sass --silent --dir=public/styles/css/");
    _app.use("/public", _express.static(__dirname + '/public'));
}
