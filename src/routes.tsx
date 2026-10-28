import { createRoutesFromElements, Link, Route } from 'react-router'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Ministry from './pages/Ministry'
import Publications from './pages/Publications'
import Agriculture from './pages/Agriculture'
import Contact from './pages/Contact'


export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="publications" element={<Publications />} />
      <Route path="agriculture" element={<Agriculture />} />
      <Route path="ministry" element={<Ministry />} />
      <Route path="contact" element={<Contact />} />
    </Route>
    <Route
      path="*"
      element={
          <main>
              <p className='text-center text-xl md:text-2xl p-4 bg-[#171717] inline-block text-white font-light'>
                  <Link to="/">Go back home</Link>
              </p>
              <h1 className='text-center text-4xl md:text-7xl font'>Page not found</h1>
          </main>
      }
    />
  </>,
)
