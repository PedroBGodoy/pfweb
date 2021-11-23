import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import OrderCreator from "../../domain/service/OrderCreator";

export default class PlaceOrder {
    repositoryFactory: RepositoryFactory;

    constructor (repositoryFactory: RepositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }

    async execute (input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const orderService = new OrderCreator(this.repositoryFactory);
        const order = await orderService.create(input);
        const total = order.getTotal();
        return new PlaceOrderOutput({
            code: order.code.value,
            total
        });
    }
}
