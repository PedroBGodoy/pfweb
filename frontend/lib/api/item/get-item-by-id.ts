const getItemById = async (id: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_ECOMMERCE_BACKEND_HOST;
  const response = await fetch(`${baseUrl}/items/${id}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.description,
    price: data.price,
  };
};

export default getItemById;
