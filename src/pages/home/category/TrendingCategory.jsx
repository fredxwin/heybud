import { useState, useEffect, Fragment } from "react"
import { getTopCategory } from "@/pages/home/category/helpers/getTopCategory"
import { Heading } from "@/styles/Typography"
import { Flexbox } from "@/styles/Flexbox"
import { CategoryItem } from "./CategoryItem"

const rankingTypes = {
  0: "🥇",
  1: "🥈",
  2: "🥉",
}

export const TrendingCategory = ({ transactions }) => {
  const [rankings, setRankings] = useState({})

  useEffect(() => {
    let result = getTopCategory(transactions)
    setRankings(result)
  }, [transactions])

  const sortByOccurance = Object.entries(rankings).sort((current, value) => value[1] - current[1])
  let topCategory = sortByOccurance.slice(0, 3).map((item, idx) => {
    return <CategoryItem key={item[0]} categoryType={item[0]} rank={rankingTypes[idx]} />
  })

  return (
    <Fragment>
      <Heading margin="18px 0">Trending</Heading>
      <Flexbox direction="row">{topCategory}</Flexbox>
    </Fragment>
  )
}
