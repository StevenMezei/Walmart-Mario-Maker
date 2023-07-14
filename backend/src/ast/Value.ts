export class Value{
    value:any;

    constructor(value:any){
        this.value = value;
    }

    toNumber(){
        this.value = +this.value;
    }
}