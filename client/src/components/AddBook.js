import { gql, useQuery } from "@apollo/client";
import { FormContainer } from "./styles/Styles";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorQuery);
  if (loading) return <p>Loading </p>;
  if (error) return <p>Error loading books</p>;
  return (
    <FormContainer action="">
      <div>
        <label htmlFor="book-name">Book Name</label>
        <input type="text" name="book-name" />
      </div>
      <div>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <select name="author">
          {loading ? (
            <option>"Loading authors"</option>
          ) : (
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))
          )}
        </select>
      </div>
      <button>Add</button>
    </FormContainer>
  );
}

export default AddBook;
