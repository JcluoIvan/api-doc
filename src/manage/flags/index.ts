import { TypeDoc } from "../../tools/TypeDoc";
import { SendType, ResponseType } from "../../tools/CommomTypes";
import { type } from "../../tools/VariableType";


const api = '/api/flags';
TypeDoc.addDoc({
    api: api + '/page',
    title: '查詢標籤資料 - 分頁',
    data: SendType.page({
        title: type().string(20)
    }),
    response: ResponseType.page({
        id: type().number().comment('id'),
        title: type().string(20).comment('標籤名稱'),
        color: type().string(7).comment('顏色'),
        remark: type().string(200).comment('備註'),
    }),
});
