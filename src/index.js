import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import {RetryLink} from "@apollo/client/link/retry"
import "./index.css";
import App from "./App";

const errorLink = onError(async ({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    await graphqlErrors.map(async ({ message, location, path }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "ignore",
  },
};

const link = from([
  errorLink,
  new RetryLink(),
  new HttpLink({ uri: "http://localhost:5000/graphql", credentials: "include" }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  credentials: "include",
  defaultOptions: defaultOptions,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
