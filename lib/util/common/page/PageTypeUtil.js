"use strict";
const UrlPattern = require("path-to-regexp");
const Url = require("url");
const PageType = requireLib('constants/PageType');

class PageTypeUtil {
    static getPageType(req){
        return PageTypeUtil.getPageTypeFromUrl(req.originalUrl.split("?")[0]);
    }
    static getPageTypeFromUrl(originalUrl){
        originalUrl = Url.parse(originalUrl, true).pathname;
        if(originalUrl === "/home"){
            return PageType.PAGE.HOME;
        }
    }

}

module.exports = PageTypeUtil;