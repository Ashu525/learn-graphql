import { gql } from "@apollo/client";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author {
        name
      }
    }
  }
`;

export { getAuthorQuery, getBookQuery, addBookMutation };
