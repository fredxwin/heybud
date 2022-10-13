import styled from "styled-components"
import { Paragraph } from "@/styles/Typography"

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 4px;
`
const Option = styled(OptionsContainer)`
  font-size: 12px;
  text-transform: capitalize;
  padding: 8px 16px;
  background-color: #f9fafb;
  border-radius: 12px;
`
const filterByOptions = ["in", "out", "expense"]

export const FilterOptions = ({ action, activeFilter }) => {
  return (
    <OptionsContainer data-testid="options">
      {filterByOptions.map((item, idx) => (
        <Option key={idx}>
          <input
            data-testid={`checkbox-${item}`}
            key={item}
            id={item}
            type="checkbox"
            onChange={action}
            value={item}
            checked={activeFilter.includes(item)}
            aria-labelledby={`label${item}`}
          />
          <Paragraph id={`label${item}`} type="secondary">
            {item}
          </Paragraph>
        </Option>
      ))}
    </OptionsContainer>
  )
}
