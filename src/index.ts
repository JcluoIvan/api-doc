import { TypeDoc } from "./tools/TypeDoc";
import treeJson from "./tools/treeJson";
import { writeFileSync } from "fs";

([
    './manage/flags/index'
]).forEach(docPath => {
    require(docPath);
});
const markDown: string[] = [];
TypeDoc.all().forEach(doc => {
    markDown.push(`## ${doc.api} (${doc.title}`);
    markDown.push(`### ${doc.comment || doc.title}`);
    markDown.push('#### Request Body')
    markDown.push('```');
    markDown.push(treeJson(doc.data));
    markDown.push('```');
    markDown.push('#### Response')
    markDown.push('```');
    markDown.push(treeJson(doc.response));
    markDown.push('```');
});

writeFileSync('./md/manage.md', markDown.join('\n'));
