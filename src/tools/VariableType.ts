

export function type (): VariableType {
    return new VariableType();
}

export enum TypeEnums {
    None = 'none',
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Array = 'array',
    Object = 'object',

}

export class VariableType {

    protected _type: TypeEnums = TypeEnums.None;

    protected _data: any = null;

    protected _required = false;

    protected _default: any = null;

    protected _comment: string = '';

    protected _max: number = 0;

    get type () {
        return this._type === TypeEnums.Array
            ? (this._data.type + '[]')
            : this._type;
    }

    string (max?: number) {
        this._type = TypeEnums.String;
        if (max) {
            this._max = max;
        }
        return this;
    }

    number () {
        this._type = TypeEnums.Number;
        return this;
    }

    boolean () {
        this._type = TypeEnums.Boolean;
        return this;
    }

    array(data: VariableType) {
        this._type = TypeEnums.Array;
        this._data = data;
        return this;
    }

    object(obj: {[key: string]: VariableType}) {
        this._data = obj;
        this._type = TypeEnums.Object;
        return this;
    }

    default (value: any) {
        this._default = value;
        return this;
    }

    required () {
        this._required = true;
        return this;
    }

    comment (comment: string) {
        this._comment = comment;
        return this;
    }

    toString () {
        const max = this._max ? `(${this._max})` : '';
        const required = this._required ? '* ' : '';
        return `${this.type}${max},\t// ${required}${this._comment}`;
    }
}