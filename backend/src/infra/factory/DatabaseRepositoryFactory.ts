import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import StockEntryRepository from "../../domain/repository/StockEntryRepository";
import PgPromiseDatabase from "../database/PgPromiseDatabase";
import ItemRepositoryDatabase from "../repository/database/ItemRepositoryDatabase";
import OrderRepositoryDatabase from "../repository/database/OrderRepositoryDatabase";
import StockEntryRepositoryDatabase from "../repository/database/StockEntryRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {

    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(PgPromiseDatabase.getInstance());
    }

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryDatabase(PgPromiseDatabase.getInstance());
    }

    createStockEntryRepository(): StockEntryRepository {
        return new StockEntryRepositoryDatabase(PgPromiseDatabase.getInstance());
    }
}