export default class PlaceOrderInput {
    cpf: string;
    items: any;
    issueDate: Date;

    constructor ({ cpf, items, issueDate = new Date() }: { cpf: string, items: any, issueDate?: Date }) {
        this.cpf = cpf;
        this.items = items;
        this.issueDate = issueDate;
    }
}
