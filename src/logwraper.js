import log from 'loglevel';
declare var process;

var logging = log.noConflict();

let loglevel = 'silent';
if(process && process.env['NODE_ENV'] !=='production'){
  loglevel = 'debug';
}

logging.setLevel(loglevel);

export default logging;
