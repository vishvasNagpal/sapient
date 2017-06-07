/**
 * Created by vnagpal on 2/25/16.
 */

var express = require('express');
var init = require('./init.js');
var app = express();
require("./lib/config/Globals")(__dirname);

global._rootDir = __dirname;
global._app = app;
global._express = express;


init(app,{_rootDir : __dirname});



