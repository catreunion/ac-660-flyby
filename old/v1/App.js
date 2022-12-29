import { useQuery, gql } from "@apollo/client"
import Locations from "./comp/Locations"

const App = () => {
  // wrap the query in the gql template literal
  // gql provides logic for parsing GraphQL queries
  const QUERY = gql`
    query getLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `

  // const QUERY = gql`
  //   {
  //     products {
  //       id
  //       name
  //       slug
  //       description
  //     }
  //   }
  // `

  // `useQuery` automatically executes the query
  // return a result object containing these 3 properties
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <h2>
        A demo from apollographql.com
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>

      <Locations locations={data.locations} />
    </>
  )
}

export default App
