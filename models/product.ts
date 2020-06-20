type TProduct = {
  id: string,
  ownerId: string,
  title: string,
  imageUrl: string,
  description: string,
  price: number
}

const product = (
  id: string,
  ownerId: string,
  title: string,
  imageUrl: string,
  description: string,
  price: number,
): TProduct => ({
  id,
  ownerId,
  title,
  imageUrl,
  description,
  price,
});

export default product;
