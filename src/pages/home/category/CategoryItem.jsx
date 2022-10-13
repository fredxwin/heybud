import { Paragraph } from "@/styles/Typography"
import { CategoryIcon } from "@/components/CategoryIcon"
import { Flexbox } from "@/styles/Flexbox"
import styled from "styled-components"

const FlexRank = styled(Flexbox)`
  align-items: center;
  line-height: 21px;
  padding: 0;
  font-size: 21px;
  align-items: center;
  justify-content: center;
  background-color: ${({ category, theme }) => theme.categories[category].backgroundColor};
  border-radius: 12px;
  padding: 8px 12px;
  @media screen and (max-width: 640px) {
    padding: 4px;
    line-height: 18px;
    font-size: 18px;
  }
`

const Category = styled(Flexbox)`
  justify-content: center;
  text-align: center;
`

export const CategoryItem = ({ categoryType, rank }) => {
  return (
    <Category tabIndex={0} data-testid="category">
      <FlexRank direction="row" category={categoryType.toLowerCase()}>
        <span>{rank}</span>
        <CategoryIcon categoryType={categoryType} />
      </FlexRank>
      <Paragraph type="primary" isBold margin="4px 0 0 0">
        {categoryType}
      </Paragraph>
    </Category>
  )
}
