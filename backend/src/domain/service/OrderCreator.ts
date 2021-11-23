import PlaceOrderInput from "../../application/place-order/PlaceOrderInput";
import Order from "../entity/Order";
import StockEntry from "../entity/StockEntry";
import RepositoryFactory from "../factory/RepositoryFactory";
import ItemRepository from "../repository/ItemRepository";
import OrderRepository from "../repository/OrderRepository";
import StockEntryRepository from "../repository/StockEntryRepository";
import StockCalculator from "./StockCalculator";

export default class OrderCreator {

    itemRepository: ItemRepository;
    orderRepository: OrderRepository;
    stockEntryRepository: StockEntryRepository;

    constructor (repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.orderRepository = repositoryFactory.createOrderRepository();
        this.stockEntryRepository = repositoryFactory.createStockEntryRepository();
    }

    async create (input: PlaceOrderInput) {
        const sequence = await this.orderRepository.count() + 1;
        const order = new Order(input.cpf, input.issueDate, sequence);
        const stockCalculator = new StockCalculator();
        for (const orderItem of input.items) {
            const item = await this.itemRepository.getById(orderItem.idItem);
            if (!item) throw new Error("Item not found");
            order.addItem(orderItem.idItem, item.price, orderItem.quantity);
            const stockEntries = await this.stockEntryRepository.getByIdItem(item.id);
            const quantity = stockCalculator.calculate(stockEntries);
            if (quantity < orderItem.quantity) throw new Error("Out of stock");
            this.stockEntryRepository.save(new StockEntry(item.id, "out", orderItem.quantity, new Date()));
        }
        await this.orderRepository.save(order);
        return order;
    }
}