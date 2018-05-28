import { VariableType } from "./VariableType";
import { TypeData } from "./TypeDoc";

let deepLevel = -1;

function shiftTabs (plusShift = 0) {
    return new Array((deepLevel + plusShift) * 4 + 1).join(' ');
}

export default function treeJson (obj: TypeData) {
    deepLevel += 1;
    const strs: string[] = ['{'];
    const keys = Object.keys(obj);
    if (keys.length) {
        keys.forEach(key => {
            const value = obj[key];
            const str = value instanceof VariableType
                ? value.toString()
                : treeJson(value);
            strs.push(shiftTabs(1) + `${key}: ${str}`);
        })
        strs.push(shiftTabs() + '},');
    } else {
        strs[0] ='{},';
    }
    deepLevel -= 1;
    return strs.join('\n');

}