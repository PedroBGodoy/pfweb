export default class GetItemByIdInput {
  id: number;

  constructor({ id }: { id: number }) {
    this.id = id;
  }
}
