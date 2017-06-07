"use strict";

let StoreProvider = requireLib('client/base/StoreProvider');
var AbstractRouter = requireLib("config/route/AbstractRouter");
var homeConfig = requireLib("views/home/HomeConfig");
var ProductUtil = requireLib("util/product/ProductUtil");

class HomeRouter extends AbstractRouter {
    get(req, res) {
        let data = ProductUtil.getProductDetails();
        const html = StoreProvider.renderToStringFromModel({data:data}, homeConfig);
        res.render('index', html,{title:'home'})

    }
}
module.exports = HomeRouter;
