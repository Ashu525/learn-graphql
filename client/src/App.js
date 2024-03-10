import BookList from "./components/BookList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import AddBook from "./components/AddBook";
import { CenteredHeading } from "./components/styles/Styles";

// Adds messages
loadDevMessages();
loadErrorMessages();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <CenteredHeading>Ashutosh's reading list</CenteredHeading>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;