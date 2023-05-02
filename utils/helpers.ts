const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
/** Formats a price in number to USD currency */
export const formatPrice = (price: number) => formatter.format(price)
