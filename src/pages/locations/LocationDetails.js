import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const LocationDetails = () => {
  const { id } = useParams()
  const QUERY = gql`
    query GetLocation($id: ID!) {
      location(id: $id) {
        id
        name
        description
        photo
      }
    }
  `
  const { loading, error, data } = useQuery(QUERY, { variables: { id } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <dir>LocationDetails</dir>
      <p>{data.location.name}</p>
    </>
  )
}

export default LocationDetails
