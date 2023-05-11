import Filter from 'bad-words'

const filter = new Filter()
/** Checks if a message does not contain profane language */
export const isClean = (message: string) => !filter.isProfane(message)

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
/** Formats a price in number to USD currency */
export const formatPrice = (price: number) => formatter.format(price)

/** Gets the name of an icon from kebab case to pascal case */
export const getIconName = <T extends string>(name: T) => {
  return name.replace(/(^\w|-\w)/g, (name) => name.replace(/-/, '').toUpperCase())
}
