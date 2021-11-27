const getItems = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_ECOMMERCE_BACKEND_HOST;
  const response = await fetch(`${baseUrl}/items`);
  const data = await response.json();
  return data.map((i: any) => ({
    id: i.id,
    name: i.description,
    price: i.price,
  }));
};

export default getItems;
