import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext";

export const useStatistics = () => {
  const [likes , setLikes] = useState<number>(0);
  const [impressions, setImpressions] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setLikes(10000)
      setImpressions(3000)
    }, 1000)
  }, [])

  return {likes, impressions }
}