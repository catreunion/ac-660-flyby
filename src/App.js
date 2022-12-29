import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"

import LocationsLayout from "./layouts/LocationsLayout"
// import Locations, { dataLoader } from "./pages/locations/Locations"
import Locations from "./pages/locations/Locations"

import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"

import About from "./pages/About"
import NotFound from "./NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="locations" element={<LocationsLayout />}>
        {/* <Route index element={<Locations />} loader={dataLoader} /> */}
        <Route index element={<Locations />} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
