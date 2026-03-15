export async function GET(req, { params }) {

  try {

    const { id } = await params;   // unwrap params Promise

    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
    );

    const data = await res.json();

    return Response.json(data);

  } catch (error) {

    return Response.json(
      { error: "Movie fetch failed" },
      { status: 500 }
    );

  }

}