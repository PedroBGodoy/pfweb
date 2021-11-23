import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import StockEntryRepository from "../../domain/repository/StockEntryRepository";
import ItemRepositoryMemory from "../repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../repository/memory/OrderRepositoryMemory";
import StockEntryRepositoryMemory from "../repository/memory/StockEntryRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {

    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }

    createOrderRepository(): OrderRepository {
        return OrderRepositoryMemory.getInstance();
    }

    createStockEntryRepository(): StockEntryRepository {
        return new StockEntryRepositoryMemory();
    }
}
