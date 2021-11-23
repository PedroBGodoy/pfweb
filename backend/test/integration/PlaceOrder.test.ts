import PlaceOrder from "../../src/application/place-order/PlaceOrder";
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput";
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

test("Deve fazer um pedido", async function () {
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
    expect(output.total).toBe(7090);
});


test("Deve fazer um pedido calculando o código", async function () {
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36",
        items: [
            { idItem: 1, quantity: 2},
            { idItem: 2, quantity: 1},
            { idItem: 3, quantity: 3}
        ],
        issueDate: new Date("2021-10-10"),
    });
    const placeOrder = new PlaceOrder(repositoryFactory);
    await placeOrder.execute(input);
    const output = await placeOrder.execute(input);
    expect(output.code).toBe("202100000002");
});

test("Não deve ser possível fazer um pedido de item sem estoque", async function () {
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36",
        items: [
            { idItem: 1, quantity: 12},
        ],
    });
    const placeOrder = new PlaceOrder(repositoryFactory);
    await expect(placeOrder.execute(input)).rejects.toThrow(new Error("Out of stock"));
});