import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App"
import "./index.css"

// 1. create an instance of ApolloClient
// 2. pass a configuration object to its constructor
const client = new ApolloClient({
  // the FlyBy GraphQL API created by Apollo
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: "https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master",
  // create an instance of InMemoryCache for caching query results
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // wrap App and place Apollo Client on the context
  // App can access GraphQL data via useQuery hook
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
