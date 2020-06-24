type TCartItem = {
  quantity: number,
  productPrice: number,
  productTitle: string,
  sum: number,
}

type TOrder = {
  id: string,
  items: TCartItem,
  totalAmount: number,
  date: Date
}

const orders = (id: string, items: TCartItem, totalAmount: number, date: Date): TOrder => ({
  id,
  items,
  totalAmount,
  date,
});

export default orders;
