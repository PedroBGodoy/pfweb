export default class PlaceOrderOutput {
    code: string;
    total: number;
    orderItems: { itemDescription: string, price: number, quantity: number }[];

    constructor ({ code, total, orderItems }: { code: string, total: number, orderItems:  { itemDescription: string, price: number, quantity: number }[] }) {
        this.code = code;
        this.total = total;
        this.orderItems = orderItems;
    }
}
