import styled from "styled-components"

const CategoryContainer = styled.div`
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 12px;
  background-color: ${({ category, theme }) => theme.categories[category].backgroundColor};
  justify-content: center;
  display: flex;
  align-items: center;
`
const categoryIcons = {
  groceries: "🛒",
  income: "💰",
  shopping: "🛍️",
  transport: "🚌",
  ["eating out"]: "🍽️",
  entertainment: "📺",
  bills: "💳",
}
export const CategoryIcon = ({ categoryType }) => {
  return (
    <CategoryContainer data-testid="category-icon" category={categoryType.toLowerCase()}>
      {categoryIcons[categoryType.toLowerCase()]}
    </CategoryContainer>
  )
}
