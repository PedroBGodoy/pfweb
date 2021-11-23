import Cpf from "./Cpf";
import OrderCode from "./OrderCode";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    items: OrderItem[];
    code: OrderCode;
    issueDate: Date;
    sequence: number;

    constructor (cpf: string, issueDate: Date = new Date(), sequence: number = 1) {
        this.cpf = new Cpf(cpf);
        this.items = [];
        this.issueDate = issueDate;
        this.sequence = sequence;
        this.code = new OrderCode(issueDate, sequence);
    }

    addItem (idItem: number, price: number, quantity: number) {
        this.items.push(new OrderItem(idItem, price, quantity));
    }

    getTotal () {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.getTotal();
        }
        return total;
    }
}
