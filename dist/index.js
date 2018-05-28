"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeDoc_1 = require("./tools/TypeDoc");
const treeJson_1 = require("./tools/treeJson");
const fs_1 = require("fs");
([
    './manage/flags/index'
]).forEach(docPath => {
    require(docPath);
});
const markDown = [];
TypeDoc_1.TypeDoc.all().forEach(doc => {
    markDown.push(`## ${doc.api} (${doc.title}`);
    markDown.push(`### ${doc.comment || doc.title}`);
    markDown.push('#### Request Body');
    markDown.push('```');
    markDown.push(treeJson_1.default(doc.data));
    markDown.push('```');
    markDown.push('#### Response');
    markDown.push('```');
    markDown.push(treeJson_1.default(doc.response));
    markDown.push('```');
});
fs_1.writeFileSync('./md/manage.md', markDown.join('\n'));
