"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function type() {
    return new VariableType();
}
exports.type = type;
var TypeEnums;
(function (TypeEnums) {
    TypeEnums["None"] = "none";
    TypeEnums["String"] = "string";
    TypeEnums["Number"] = "number";
    TypeEnums["Boolean"] = "boolean";
    TypeEnums["Array"] = "array";
    TypeEnums["Object"] = "object";
})(TypeEnums = exports.TypeEnums || (exports.TypeEnums = {}));
class VariableType {
    constructor() {
        this._type = TypeEnums.None;
        this._data = null;
        this._required = false;
        this._default = null;
        this._comment = '';
        this._max = 0;
    }
    get type() {
        return this._type === TypeEnums.Array
            ? (this._data.type + '[]')
            : this._type;
    }
    string(max) {
        this._type = TypeEnums.String;
        if (max) {
            this._max = max;
        }
        return this;
    }
    number() {
        this._type = TypeEnums.Number;
        return this;
    }
    boolean() {
        this._type = TypeEnums.Boolean;
        return this;
    }
    array(data) {
        this._type = TypeEnums.Array;
        this._data = data;
        return this;
    }
    object(obj) {
        this._data = obj;
        this._type = TypeEnums.Object;
        return this;
    }
    default(value) {
        this._default = value;
        return this;
    }
    required() {
        this._required = true;
        return this;
    }
    comment(comment) {
        this._comment = comment;
        return this;
    }
    toString() {
        const max = this._max ? `(${this._max})` : '';
        const required = this._required ? '* ' : '';
        return `${this.type}${max},\t// ${required}${this._comment}`;
    }
}
exports.VariableType = VariableType;
