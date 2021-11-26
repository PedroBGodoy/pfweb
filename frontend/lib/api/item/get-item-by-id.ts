const getItemById = async (id: number) => {
  const response = await fetch(`http://localhost:3001/items/${id}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.description,
    price: data.price,
  };
};

export default getItemById;
