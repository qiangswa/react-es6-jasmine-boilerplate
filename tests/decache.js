//modifeid version
//originally is from https://github.com/dwyl/decache
//have to pass the module id, otherwise the require.resolve cannot find the module inside the function here.
//Don't have time to figureout why

/**
 * Removes a module from the cache. We need this to re-load our http_request !
 * see: http://stackoverflow.com/a/14801711/1148249
 */
require.decache = function (moduleid,moduleName) {

    //moduleName = require.find(moduleName);
//console.log('moduleName is:' + moduleName);
    if(!moduleid) {return;}

    // Run over the cache looking for the files
    // loaded by the specified module name
    require.searchCache(moduleid, moduleName,function (mod) {
        delete require.cache[mod.id];
    });

    // Remove cached paths to the module.
    // Thanks to @bentael for pointing this out.
    if(module.constructor._pathCache){
      Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
          if (cacheKey.indexOf(moduleName)>0) {
              delete module.constructor._pathCache[cacheKey];
          }
      });
    }
};

/**
 * Runs over the cache to search for all the cached
 * files
 */
require.searchCache = function (mod, moduleName,callback) {

    // Check if the module has been resolved and found within
    // the cache no else so #ignore else http://git.io/vtgMI
    /* istanbul ignore else  */
    if (mod && ((mod = require.cache[mod]) !== undefined)) {
        // Recursively go over the results
        (function run(mod) {
            // Go over each of the module's children and
            // run over it
            if(mod.children){
              mod.children.forEach(function (child) {
                  run(child);
              });
            }

            // Call the specified callback providing the
            // found module
            callback(mod);
        })(mod);
    }
};

module.exports = require.decache;
