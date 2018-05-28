import { VariableType } from "./VariableType";


type DocData = {
    api: string,
    title: string,
    comment ?: string,
    data : TypeData,
    response: TypeData,
}

export type TypeData = {
    [key: string]: VariableType | TypeData,
}

export class TypeDoc {

    protected static docs: DocData[] = [];


    static addDoc (data: DocData) {

        this.docs.push(data);

    }

    static all () {
        return this.docs;
    }

}
