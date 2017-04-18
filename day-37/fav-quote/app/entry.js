require('file-loader?emitFile=false!./index.html');
require('./stylesheets/app.scss'); /* This loads the css and foces the sass to compile... */
require('file-loader?emitFile=false!./images/js-img.png');
import app from './scripts/app.js';

app();
