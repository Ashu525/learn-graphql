import BookList from "./components/BookList";
import { ApolloProvider, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ashutosh's reading list</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
