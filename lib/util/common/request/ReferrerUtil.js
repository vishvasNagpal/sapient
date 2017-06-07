"use strict";
const logger = require("log4js").getLogger("util.common.request.ReferrerUtil");

class ReferrerUtil {
    static getReferrer(req){
        return req.header("referrer") || req.headers.referer || "";
    }
}
module.exports = ReferrerUtil;