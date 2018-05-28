"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VariableType_1 = require("./VariableType");
let deepLevel = -1;
function shiftTabs(plusShift = 0) {
    return new Array((deepLevel + plusShift) * 4 + 1).join(' ');
}
function treeJson(obj) {
    deepLevel += 1;
    const strs = ['{'];
    const keys = Object.keys(obj);
    if (keys.length) {
        keys.forEach(key => {
            const value = obj[key];
            const str = value instanceof VariableType_1.VariableType
                ? value.toString()
                : treeJson(value);
            strs.push(shiftTabs(1) + `${key}: ${str}`);
        });
        strs.push(shiftTabs() + '},');
    }
    else {
        strs[0] = '{},';
    }
    deepLevel -= 1;
    return strs.join('\n');
}
exports.default = treeJson;
