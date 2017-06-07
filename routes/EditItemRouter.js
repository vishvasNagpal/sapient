"use strict";

let StoreProvider = requireLib('client/base/StoreProvider');
var AbstractRouter = requireLib("config/route/AbstractRouter");
var PopInnerContent = requireLib("views/home/PopInnerContent");
var ProductUtil = requireLib("util/product/ProductUtil");

class EditItemRouter extends AbstractRouter {
    get(req, res) {

        let data = ProductUtil.getProductDetails();
        data.fetch_id = req.query.p_id;

        const html = StoreProvider.renderToStringFromModel({data:data}, PopInnerContent);
        res.send(html)

    }
}
module.exports = EditItemRouter;
