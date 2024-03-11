import { useQuery, useMutation } from "@apollo/client";
import { FormContainer } from "./styles/Styles";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";
import { useState } from "react";
function AddBook() {
  const [bookInfo, setBookInfo] = useState({
    name: "",
    genre: "",
    authorId: null,
  });
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const { data: newBook } = await addBook({
        variables: bookInfo,
        refetchQueries: [{ query: getBooksQuery }],
      });
      console.log("New book added:", newBook);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContainer onSubmit={handleAddBook}>
      <div>
        <label htmlFor="book-name">Book Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="authorId">Author</label>
        <select name="authorId" onChange={handleChange}>
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
