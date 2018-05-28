"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VariableType_1 = require("./VariableType");
var SendType;
(function (SendType) {
    function page(data) {
        return Object.assign({}, data, { size: VariableType_1.type().number().comment('每頁顯示筆數'), page: VariableType_1.type().number().comment('查詢頁碼'), sort: VariableType_1.type().array(VariableType_1.type().string()).comment('排序 ["id.desc", "name,asc" ...]') });
    }
    SendType.page = page;
})(SendType = exports.SendType || (exports.SendType = {}));
var ResponseType;
(function (ResponseType) {
    function response(data) {
        return Object.assign({ success: VariableType_1.type().boolean().comment('執行結果'), message: VariableType_1.type().string().comment('回傳訊息') }, data);
    }
    ResponseType.response = response;
    function page(content, join = {}) {
        return response({
            data: {
                content,
                first: VariableType_1.type().boolean().comment('是否為第一頁'),
                last: VariableType_1.type().boolean().comment('是否為最後一頁'),
                number: VariableType_1.type().number().comment('目前頁碼'),
                numberOfElements: VariableType_1.type().number().comment('實際回傳筆數'),
                size: VariableType_1.type().number().comment('每頁顯示筆數'),
                sort: VariableType_1.type().array(VariableType_1.type().string()).comment('排序'),
                totalElements: VariableType_1.type().number().comment('總筆數'),
                totalPages: VariableType_1.type().number().comment('總頁數'),
            },
            join,
        });
    }
    ResponseType.page = page;
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
