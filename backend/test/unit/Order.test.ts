import Order from "../../src/domain/entity/Order";

test("Deve criar um pedido com 3 itens", function () {
    const cpf = "778.278.412-36";
    const order = new Order(cpf);
    order.addItem(1, 1000, 2);
    order.addItem(2, 5000, 1);
    order.addItem(3, 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test("Deve criar um pedido calculando o código", function () {
    const cpf = "778.278.412-36";
    const order = new Order(cpf, new Date("2020-10-10"), 2);
    order.addItem(1, 1000, 2);
    order.addItem(2, 5000, 1);
    order.addItem(3, 30, 3);
    expect(order.code.value).toBe("202000000002");
});
