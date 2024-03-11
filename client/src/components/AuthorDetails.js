import { useQuery } from "@apollo/client";
import { getAuthorQuery } from "../queries/queries";

const AuthorDetails = ({ author }) => {
  const { loading, error, data } = useQuery(getAuthorQuery, {
    variables: { id: author },
    skip: !author,
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error in fetching author details</div>;
  if (!author) return <div>No author selected!</div>;
  return (
    <div id="details">
      <h3>Author Details</h3>
      <div>
        <label htmlFor="author-name">Name:</label>
        <p name="book-name">{data.author.name}</p>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <p name="age">{data.author.age}</p>
      </div>
      <div>
        <label htmlFor="author-name">Author Name:</label>
        <p name="author-name">{data.author.name}</p>
      </div>
      <div>
        <label htmlFor="author-age">Author Age:</label>
        <p name="author-age">{data.author.age}</p>
      </div>
      <div>
        <label htmlFor="books">Books:</label>
        <ul name="books">
          {data.author.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorDetails;
