import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  const activeStyle = "text-3xl font-bold underline"

  return (
    <>
      <header>
        <nav>
          {/* <h1>Jobarouter</h1> */}
          {/* <div>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
            <NavLink to="about" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              About
            </NavLink>
            <NavLink to="help" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Help
            </NavLink>
          </div> */}

          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Jobarouter</h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Home
                </button>
              </NavLink>
              <NavLink to="about" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <button type="button" className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  About
                </button>
              </NavLink>
              <NavLink to="help" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <button type="button" className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Help
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
