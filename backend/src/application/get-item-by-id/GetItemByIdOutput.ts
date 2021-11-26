export default class GetItemByIdOutput {
  id: number;
  description: string;
  price: number;

  constructor(id: number, description: string, price: number) {
    this.id = id;
    this.description = description;
    this.price = price;
  }
}
