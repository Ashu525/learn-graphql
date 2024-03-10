import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!bookId) return <span>No book selected!</span>;
  return (
    <div id="book-details">
      <div>
        <label htmlFor="book-name">Name:</label>
        <p name="book-name">{data.book.name}</p>
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <p name="genre">{data.book.genre}</p>
      </div>
      <div>
        <label htmlFor="author-name">Author Name:</label>
        <p name="author-name">{data.book.author.name}</p>
      </div>
      <div>
        <label htmlFor="author-age">Author Age:</label>
        <p name="author-age">{data.book.author.age}</p>
      </div>
      <div>
        <label htmlFor="author-name">Books:</label>
        <ul>
          {data.book.author.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
