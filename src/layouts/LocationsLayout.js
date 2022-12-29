import { Outlet } from "react-router-dom"

const LocationsLayout = () => {
  return (
    <>
      <h2>
        The following list of intergalactic 👽 locations and graphics are created by apollographql.com
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>

      <Outlet />
    </>
  )
}

export default LocationsLayout
