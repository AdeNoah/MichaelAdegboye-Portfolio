import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router'

export const navigationLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Ministry', to: '/ministry' },
  { label: 'Publications', to: '/publications' },
  { label: 'Agriculture', to: '/agriculture' },
  { label: 'Contact', to: '/contact' },
]

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-black/10 bg-white ">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full flex-wrap items-center justify-between p-4 pr-8 py-4"
      >
        <NavLink
          to="/"
          end
          className="text-lg font-light tracking-wide text-black"
          onClick={() => setMenuOpen(false)}
        >
          Michael <span className='font-semibold'>Adegboye</span>
        </NavLink>

        <button
          type="button"
          className="rounded p-2 text-black hover:bg-black/5 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <ul
          id="main-navigation-links"
          className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-4 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-x-6 md:gap-y-2 md:pt-0`}
        >
          {navigationLinks.map(({ label, to, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-black ${isActive
                    ? 'font-semibold text-black md:border-b-3 md:border-b-black md:py-4'
                    : 'text-neutral-500'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
