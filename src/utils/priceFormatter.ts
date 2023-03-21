const priceFormatrer = (price: number) => {
  const options = { style: 'currency', currency: 'USD' };
  const formatted = price.toLocaleString('en-US', options);
  return formatted;
};
export default priceFormatrer;
