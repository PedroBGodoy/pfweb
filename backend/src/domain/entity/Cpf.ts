export default class Cpf {
    value: string;

    constructor (value: string) {
        if (!this.validate(value)) throw new Error("Invalid CPF");    
        this.value = value;
    }
    
    validate(cpf = "") {
        return true
    }
}