export default class PlaceOrderOutput {
    code: string;
    total: number;

    constructor ({ code, total }: { code: string, total: number }) {
        this.code = code;
        this.total = total;
    }
}
