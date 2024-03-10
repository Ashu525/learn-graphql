import { useQuery, useMutation } from "@apollo/client";
import { FormContainer } from "./styles/Styles";
import {
  getAuthorQuery,
  addBookMutation,
  getBookQuery,
} from "../queries/queries";
import { useState } from "react";
function AddBook() {
  const [bookInfo, setBookInfo] = useState({
    name: "",
    genre: "",
    authorId: null,
  });
  const { loading, data } = useQuery(getAuthorQuery);
  const [addBook] = useMutation(addBookMutation);

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const { data: newBook } = await addBook({
        variables: bookInfo,
        refetchQueries: [{ query: getBookQuery }],
      });
      console.log("New book added:", newBook);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleAddBook}>
      <div>
        <label htmlFor="book-name">Book Name</label>
        <input
          type="text"
          name="book-name"
          onChange={(e) => setBookInfo({ ...bookInfo, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          onChange={(e) => setBookInfo({ ...bookInfo, genre: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <select
          name="author"
          onChange={(e) => {
            setBookInfo({ ...bookInfo, authorId: e.target.value });
          }}
        >
          {loading ? (
            <option>Loading authors</option>
          ) : (
            <>
              <option disabled value="">
                Select Author
              </option>
              {data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <button>Add</button>
    </FormContainer>
  );
}

export default AddBook;
