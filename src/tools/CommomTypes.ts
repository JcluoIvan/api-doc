import { VariableType, type } from "./VariableType";
import { TypeDoc, TypeData } from "./TypeDoc";


export namespace SendType {
    export function page (data: {[key: string]: VariableType}) {
        return {
            ...data,
            size: type().number().comment('每頁顯示筆數'),
            page: type().number().comment('查詢頁碼'),
            sort: type().array(type().string()).comment('排序 ["id.desc", "name,asc" ...]'),
        };
    }
}

export namespace ResponseType {

    export function response (data: TypeData) {
        return {
            success: type().boolean().comment('執行結果'),
            message: type().string().comment('回傳訊息'),
            ...data,
        };
    }

    export function page (
        content: TypeData,
        join: TypeData = {},
    ) {
        return response({
            data: {
                content,
                first: type().boolean().comment('是否為第一頁'),
                last: type().boolean().comment('是否為最後一頁'),
                number: type().number().comment('目前頁碼'),
                numberOfElements: type().number().comment('實際回傳筆數'),
                size: type().number().comment('每頁顯示筆數'),
                sort: type().array(type().string()).comment('排序'),
                totalElements: type().number().comment('總筆數'),
                totalPages: type().number().comment('總頁數'),
            },
            join,
        });
    }


}
