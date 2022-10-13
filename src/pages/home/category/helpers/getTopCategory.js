export const getTopCategory = (transactions) => {
  const count = {}
  transactions?.forEach(({ category_title }) => {
    if (count[category_title]) {
      count[category_title] += 1
    } else {
      count[category_title] = 1
    }
  })
  return count
}
