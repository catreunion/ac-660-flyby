import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  const inactiveStyle = "text-black "
  const activeStyle = "bg-indigo-600 text-white"

  return (
    <>
      <nav>
        <h2>Help</h2>
        <NavLink to="faq" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
          FAQ
        </NavLink>
        <NavLink to="contact" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
          Contact
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default HelpLayout
