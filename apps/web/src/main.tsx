import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const rootEl = document.getElementById("root") as Element;

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(rootEl);
root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
