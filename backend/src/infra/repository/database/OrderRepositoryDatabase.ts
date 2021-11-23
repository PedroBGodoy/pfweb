import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";
import Database from "../../database/Database";

export default class OrderRepositoryDatabase implements OrderRepository {
    database: Database;

    constructor (database: Database) {
        this.database = database;
    }

    async save(order: Order): Promise<void> {
        const orderData = await this.database.one("insert into pfweb.order (code, cpf, issue_date, serial) values ($1, $2, $3, $4) returning *", [order.code.value, order.cpf.value, order.issueDate, order.sequence]);
        for (const orderItem of order.items) {
            await this.database.one("insert into pfweb.order_item (id_order, id_item, price, quantity) values ($1, $2, $3, $4) returning *", [orderData.id, orderItem.idItem, orderItem.price, orderItem.quantity]);
        }
    }

    async get(code: string): Promise<Order> {
        const orderData = await this.database.one("select * from pfweb.order where code = $1", [code]);
        if (!orderData) throw new Error("Order not found");
        const orderItemsData = await this.database.many("select * from pfweb.order_item where id_order = $1", [orderData.id]);
        const order = new Order(orderData.cpf, new Date(orderData.issue_date), orderData.serial);
        for (const orderItemData of orderItemsData) {
            order.addItem(orderItemData.id_item, parseFloat(orderItemData.price), orderItemData.quantity);
        }
        return order;
    }

    async count(): Promise<number> {
        const countData = await this.database.one("select count(*)::int as count from pfweb.order", []);
        return countData.count;
    }

    async clean(): Promise<void> {
        await this.database.none("delete from pfweb.order_item", []);
        await this.database.none("delete from pfweb.order", []);
    }
}