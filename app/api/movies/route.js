import axios from "axios";

const movieIds = [
  "tt0468569", // The Dark Knight
  "tt0114369", // Se7en
  "tt0172495", // Gladiator
  "tt0080684", // Star Wars: The Empire Strikes Back
  "tt0076759", // Star Wars: A New Hope
  "tt0102926", // The Silence of the Lambs
  "tt0099685", // Goodfellas
  "tt0120815", // Saving Private Ryan
  "tt0167261", // Lord of the Rings: The Two Towers
  "tt0209144", // Memento
  "tt0407887", // The Departed
  "tt0253474", // The Pianist
  "tt1853728", // Django Unchained
  "tt0848228", // The Avengers
  "tt0118799", // Life is Beautiful
  "tt0050083", // 12 Angry Men
  "tt0361748", // Inglourious Basterds
  "tt1345836", // The Dark Knight Rises
  "tt0088763", // Back to the Future
  "tt0071562"  // The Godfather Part II
];

export async function GET() {
  try {

    const movies = await Promise.all(
      movieIds.map(async (id) => {

        const res = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=97be5c`
        );

        return res.data;

      })
    );

    return Response.json(movies);

  } catch (error) {

    return Response.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );

  }
}