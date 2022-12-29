import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  const activeStyle = "text-3xl font-bold underline"

  return (
    <>
      <nav>
        <NavLink to="faq" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          FAQ
        </NavLink>
        <NavLink to="contact" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Contact
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default HelpLayout
