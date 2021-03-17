export const convertToCurrencyString = (amount, currency) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
