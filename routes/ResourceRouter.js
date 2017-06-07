"use strict";

let StoreProvider = requireLib('client/base/StoreProvider');
var AbstractRouter = requireLib("config/route/AbstractRouter");
var ReferrerUtil = requireLib("util/common/request/ReferrerUtil");
var PageTypeUtil = requireLib("util/common/page/PageTypeUtil");
var PageResourceUtil = requireLib("util/common/page/PageResourceUtil");
class ResourceRouter extends AbstractRouter {
    get(req, res) {
        switch (req.query.resType){
            case "css":
                this.cssResources(req, res);
                break;
            case "js":
                this.jsResources(req, res);
                break;
            default:
                res.status(404).send();
                res.end();
        }

    }
    cssResources(req,res){
        let referrer = ReferrerUtil.getReferrer(req);
        let page = PageTypeUtil.getPageTypeFromUrl(referrer || '/');
        let cssFilesPath = PageResourceUtil.getCssFiles(req,page);
        res.set('Content-Type', 'text/css');
        res.set('Accept-Ranges', 'bytes');
        PageResourceUtil.createCssFile(cssFilesPath,res);

    }
    jsResources(req,res){
        res.send();
        res.end();
    }

}
module.exports = ResourceRouter;


