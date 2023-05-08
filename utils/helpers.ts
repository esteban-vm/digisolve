const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
/** Formats a price in number to USD currency */
export const formatPrice = (price: number) => formatter.format(price)

/** Gets the name of an icon from kebab case to pascal case */
export const getIconName = <T extends string>(name: T) => {
  return name.replace(/(^\w|-\w)/g, (name) => name.replace(/-/, '').toUpperCase())
}
