export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `https://onebite-books-server-mauve.vercel.app/book`;
  if (q) {
    url = url + `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
