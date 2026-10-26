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
  return (
    <header className="border-b border-black/10 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto px-2 py-6 w-full flex justify-between"
      >
        <NavLink
          to="/"
          end
          className="text-lg font-semibold tracking-wide text-black"
        >
          Michael Adegboye
        </NavLink>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navigationLinks.map(({ label, to, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-black ${isActive
                    ? 'font-semibold text-black py-5 border-b-3 border-b-black'
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

