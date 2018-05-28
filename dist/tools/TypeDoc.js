"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeDoc {
    static addDoc(data) {
        this.docs.push(data);
    }
    static all() {
        return this.docs;
    }
}
TypeDoc.docs = [];
exports.TypeDoc = TypeDoc;
