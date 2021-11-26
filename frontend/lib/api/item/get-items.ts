const getItems = async () => {
  const response = await fetch(`http://localhost:3001/items`);
  const data = await response.json();
  return data.map((i: any) => ({
    id: i.id,
    name: i.description,
    price: i.price,
  }));
};

export default getItems;
