export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("USD", {
    style: "currency",
    currency: "USD",
  }).format(quantity);
}
