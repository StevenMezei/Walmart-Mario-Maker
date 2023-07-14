import { Value } from "./Value";

export class Statement{

    // Has varname and value to set
    property:string;
    value:Value;

    constructor(property:string, value:Value){
        this.property = property;
        this.value = value;
    }


}