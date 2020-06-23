type TCartItem = {
  quantity: number,
  productPrice: number,
  productTitle: string,
  sum: number,
}

const productItem = (
  quantity: number,
  productPrice: number,
  productTitle: string,
  sum: number,
): TCartItem => ({
  quantity,
  productPrice,
  productTitle,
  sum,
});

export default productItem;
