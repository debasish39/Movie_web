export async function fetchMovie(id){

  const res = await fetch(`/api/movie/${id}`)

  return res.json()

}