import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import { CenteredContainer } from "./styles/Styles";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;
  return (
    <CenteredContainer>
      <h3>Book List</h3>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selected} />
    </CenteredContainer>
  );
}

export default BookList;
