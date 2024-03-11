import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";
import { CenteredContainer } from "./styles/Styles";
import AuthorDetails from "./AuthorDetails";
import { useState } from "react";

const AuthorList = () => {
  const [author, setAuthor] = useState(null);
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error in loading authors list!</p>;
  return (
    <CenteredContainer>
      <h3>Author List</h3>
      <ul id="book-list">
        {data.authors.map((author) => (
          <li key={author.id} onClick={() => setAuthor(author.id)}>
            {author.name}
          </li>
        ))}
      </ul>
      <AuthorDetails author={author} />
    </CenteredContainer>
  );
};

export default AuthorList;
