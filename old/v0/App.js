import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  const activeStyle = "text-3xl font-bold underline"

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>catreunion</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            About
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
