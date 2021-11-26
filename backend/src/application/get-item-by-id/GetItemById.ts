import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import ItemRepository from "../../domain/repository/ItemRepository";
import GetItemByIdInput from "./GetItemByIdInput";
import GetItemByIdOutput from "./GetItemByIdOutput";

export default class GetItemById {
  itemsRepository: ItemRepository;

  constructor(repositoryFactory: RepositoryFactory) {
    this.itemsRepository = repositoryFactory.createItemRepository();
  }

  async execute(
    input: GetItemByIdInput
  ): Promise<GetItemByIdOutput | undefined> {
    const item = await this.itemsRepository.getById(input.id);
    if (!item) return;
    return {
      id: item.id,
      description: item.description,
      price: item.price,
    };
  }
}
