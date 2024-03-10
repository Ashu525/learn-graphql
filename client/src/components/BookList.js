import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";
import { CenteredContainer } from "./styles/Styles";

function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;
  return (
    <CenteredContainer>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </CenteredContainer>
  );
}

export default BookList;
