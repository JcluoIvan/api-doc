"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeDoc_1 = require("../../tools/TypeDoc");
const CommomTypes_1 = require("../../tools/CommomTypes");
const VariableType_1 = require("../../tools/VariableType");
const api = '/api/flags';
TypeDoc_1.TypeDoc.addDoc({
    api: api + '/page',
    title: '查詢標籤資料 - 分頁',
    data: CommomTypes_1.SendType.page({
        title: VariableType_1.type().string(20)
    }),
    response: CommomTypes_1.ResponseType.page({
        id: VariableType_1.type().number().comment('id'),
        title: VariableType_1.type().string(20).comment('標籤名稱'),
        color: VariableType_1.type().string(7).comment('顏色'),
        remark: VariableType_1.type().string(200).comment('備註'),
    }),
});
