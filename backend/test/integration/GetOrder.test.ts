import PlaceOrder from "../../src/application/place-order/PlaceOrder";
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput";
import GetOrder from "../../src/application/get-order/GetOrder";
import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory";
import RepositoryFactory from "../../src/domain/factory/RepositoryFactory";

let repositoryFactory: RepositoryFactory;

beforeEach(async function () {
    repositoryFactory = new DatabaseRepositoryFactory();
    const orderRepository = repositoryFactory.createOrderRepository();
    await orderRepository.clean();
    const stockEntryRepository = repositoryFactory.createStockEntryRepository();
    await stockEntryRepository.clean();
});

test("Deve consultar um pedido", async function () {
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36",
        items: [
            { idItem: 1, quantity: 2},
            { idItem: 2, quantity: 1},
            { idItem: 3, quantity: 3}
        ],
    });
    const placeOrder = new PlaceOrder(repositoryFactory);
    const output = await placeOrder.execute(input);
    const getOrder = new GetOrder(repositoryFactory);
    const getOrderOutput = await getOrder.execute(output.code);
    expect(getOrderOutput.total).toBe(7090);
});
