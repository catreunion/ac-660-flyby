import { useQuery, gql } from "@apollo/client"
// import { Link, useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

const Locations = () => {
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

      {/* {locations.map((item) => (
        <Link to="/" key={item.id}>
          <p>{item.title}</p>
          <p>Based in {item.location}</p>
        </Link>
      ))} */}

      {data.locations.map((item) => (
        <Link to="/" key={item.id}>
          <h3>{item.name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${item.photo}`} />
          <br />
          <b>About this location:</b>
          <p>{item.description}</p>
        </Link>
      ))}
    </>
  )
}

export default Locations
