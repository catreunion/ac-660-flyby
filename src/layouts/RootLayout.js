import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  const activeStyle = "text-3xl font-bold underline"

  return (
    <>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            About
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
