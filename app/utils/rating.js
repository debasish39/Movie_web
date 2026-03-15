export function averageRating(ratings){

  if(!ratings.length) return 0

  const total = ratings.reduce((a,b)=>a+b,0)

  return (total/ratings.length).toFixed(1)

}