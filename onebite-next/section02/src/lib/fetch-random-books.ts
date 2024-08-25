export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-mauve.vercel.app/book/random`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
