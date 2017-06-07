var fs = require('fs');
var xmlReader = require('xmlreader');
const logger = require('log4js').getLogger("config.route.routerLoader");

function callFn(obj, prop, fn){
    if(!!Object.getPrototypeOf(obj)[prop]){
        fn();
    }
}
module.exports = function(app,__rootDir){
    logger.info('i am ain route loader');

    var routesContents = fs.readFileSync(_rootDir + "/lib/config/routes.xml").toString();
    xmlReader.read(routesContents,function(err,res){
        var xmlRoutes = res["xml-routes"];
        var cache={};
        xmlRoutes.route.each(function (index, route) {
            var routeUrl = route["route-url"].text();
            var routeClass = route["route-class"].text();
            var router = (new (require(__rootDir + routeClass))());
            logger.debug("loading router:%s, class:%s", route["route-name"].text(), routeClass);
            if(router.constructor.name !== "AbstractRouter"){
                cache[routeClass] = router;
                callFn(router, "init", router.init.bind(router, app));
                callFn(router, "get", app.get.bind(app, routeUrl, router.get.bind(router)));
                callFn(router, "post", app.post.bind(app, routeUrl, router.post.bind(router)));
                callFn(router, "delete", app.delete.bind(app, routeUrl, router.delete.bind(router)));
            }
        });
    })

}
