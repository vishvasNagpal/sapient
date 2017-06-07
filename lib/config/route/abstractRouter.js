"use strict";

/**
 *  Routing Class for defining routes in App.
 *  All routing classes must inherit this and implement methods as this is to
 *  be used as INTERFACE only.
 */

class AbstractRouter {
    init(app) {
        return app;
    }

    get(req, resp) {
        return {req: req, resp: resp};
    }

    post(req, resp){
        return {req: req, resp: resp};
    }

    delete(req, resp, next){
        return {req: req, resp: resp, next:next};
    }
}

module.exports = AbstractRouter;