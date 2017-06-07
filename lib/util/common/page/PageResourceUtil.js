'use strict';

const PageType = requireLib('constants/PageType');
let path = require('path');
const fs = require("fs");
const logger = require("log4js").getLogger("util.common.page.PageResourceUtil");

const RES_PATH = {
    js: "/public/script/",
    jsOut: "/public/script/output/",
    cssOut: "public/styles/output",
    css: "public/styles/css/"
};

class PageResourceUtil{
    static getCssFiles(req,page){
        let filePath = [];

        filePath.push(path.join(_rootDir , RES_PATH.css,'base',page,'home.min.css'));
        return filePath;
    }
    static createCssFile(files,res){
        if(files.length){
            try{
                fs.unlinkSync(path.join(RES_PATH.cssOut , "output.css"));
            }catch (e){
                logger.info((RES_PATH.cssOut + "output.css") + " not found, creating a new one");
            }

            let dataStream = [];
            let counter = files.length;
            let startTime = Date.now();

            files.forEach(function(file,i){
                fs.readFile(file, "utf-8", function (err, data) {
                    if (data) {
                        dataStream[i] = (data);
                    }
                    counter--;
                    checkCounter(counter, res, dataStream, startTime);
                });
            });
        }


    }
}

function checkCounter(counter, res, fileResp, startTime, responseEndNotifier) {
    if (counter === 0) {
        if (fileResp && fileResp.length > 0) {
            fileResp.forEach(function (data) {
                if (data) {
                    res.write(data);
                    res.flush();
                }
            });
        }
        endResponse(res, responseEndNotifier);
        logger.debug("Total time for file resp:", (Date.now() - startTime));
    }
}

function endResponse(resp, responseEndNotifier) {
    if (responseEndNotifier) {
        responseEndNotifier(resp);
    }
    resp.end();
}
module.exports = PageResourceUtil;