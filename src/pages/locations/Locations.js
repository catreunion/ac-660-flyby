import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

const Locations = () => {
  // wrap the query in gql template literal
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

  // `useQuery` automatically executes the query
  // return the result with 3 properties
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      {data.locations.map((item) => (
        <Link to="/" key={item.id}>
          <h3>{item.name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${item.photo}`} />
          <p>{item.description}</p>
        </Link>
      ))}
    </>
  )
}

export default Locations
