import { ArrowRight, Check, Leaf, Sprout, TrendingUp, UsersRound } from 'lucide-react'
import { Link } from 'react-router'

const approachItems = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every recommendation prioritizes long-term soil health, water conservation, and environmental balance.',
  },
  {
    icon: UsersRound,
    title: 'Community-Centered',
    description: 'We build solutions with communities, not for them, ensuring local ownership and cultural relevance.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'We measure success through tangible outcomes: increased yields, improved livelihoods, and ecosystem resilience.',
  },
]

const services = [
  {
    title: 'Farm Management Consulting',
    description: 'Comprehensive guidance on optimizing farm operations, resource allocation, and productivity.',
    items: ['Operational efficiency audits', 'Resource optimization strategies', 'Technology integration planning'],
  },
  {
    title: 'Sustainable Practices Training',
    description: 'Hands-on training in regenerative agriculture and environmentally responsible farming.',
    items: ['Soil health management', 'Water conservation techniques', 'Organic farming methods'],
  },
  {
    title: 'Market Access & Business Development',
    description: 'Strategic support for accessing markets and building profitable agricultural enterprises.',
    items: ['Market linkage facilitation', 'Value chain development', 'Business model design'],
  },
  {
    title: 'Community Agriculture Programs',
    description: 'Tailored programs for churches, NGOs, and community organizations.',
    items: ['Community garden initiatives', 'Youth agricultural training', 'Food security projects'],
  },
]

const projects = [
  {
    year: '2023',
    title: 'Sustainable Cassava Cooperative',
    location: 'Oyo State, Nigeria',
    description: 'Established a 50-farmer cooperative implementing sustainable cassava farming with 40% yield increase.',
  },
  {
    year: '2024',
    title: 'Youth Agricultural Training Program',
    location: 'Lagos, Nigeria',
    description: 'Trained 80 youth in modern farming techniques, with 65% starting their own agricultural ventures.',
  },
  {
    year: '2023–2025',
    title: 'Church Community Gardens Initiative',
    location: 'Multiple Locations',
    description: 'Helped 12 churches establish community gardens serving 500+ families with fresh produce.',
  },
]

const Agriculture = () => {
  return (
    <main className="text-[#244334]">
      <section className="min-h-[135px] border-b border-green-200 bg-[#effcf4] px-6 py-4 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#d1fae5] text-[#16834b] md:size-20">
              <Sprout aria-hidden="true" className="size-8 md:size-12" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-wide text-[#16834b]">Agriculture</p>
              <h1 className="text-4xl font-light leading-tight text-[#17643d] md:text-7xl">Consultancy Services</h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl leading-7 text-[#367454]">
            Professional guidance in sustainable farming, agricultural innovation, and building resilient food systems for communities.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 bg-[#16834b] p-6 font-semibold text-white transition-colors hover:bg-[#11683b]"
          >
            Schedule Consultation <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </section>

      <section aria-label="Agriculture consultancy overview" className="bg-white px-6 pt-5 pb-0 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <img
            src="/agriculture.jpg"
            alt="Healthy green crops growing in a field"
            className="aspect-[2.34] w-full object-cover object-center"
          />
          <div className="grid gap-8 pt-10 pb-5 md:grid-cols-2 md:gap-12 md:py-10">
            <div>
              <h2 className="mb-4 text-3xl font-light text-[#17643d] md:text-6xl">Our Mission</h2>
              <div className="space-y-4 leading-7 text-slate-600">
                <p>
                  Agriculture is more than a profession—it&apos;s a calling to steward the earth and provide for communities. Our consultancy brings together technical expertise, sustainable practices, and a faith-based perspective on creation care.
                </p>
                <p>
                  We work with individual farmers, cooperatives, churches, and community organizations to implement farming practices that are both productive and sustainable. Our approach emphasizes building capacity, fostering innovation, and creating economic opportunity.
                </p>
                <p>
                  By integrating modern agricultural science with traditional wisdom and ethical stewardship, we help communities build resilient food systems that honor both people and planet.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-light text-[#17643d] md:text-6xl">Our Approach</h2>
              <ul className="space-y-2 sm:space-y-4">
                {approachItems.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex gap-2 sm:gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#16834b]">
                      <Icon aria-hidden="true" size={15} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">{title}</h3>
                      <p className="mt-2 leading-6 text-slate-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="impact-heading" className="bg-[#effcf4] px-6 py-6 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 id="impact-heading" className="text-3xl font-light text-[#17643d] md:text-6xl">Impact by the Numbers</h2>
          <p className="mt-4 text-slate-600">Measurable results across our consultancy work</p>
          <dl className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ['200+', 'Farmers Trained'],
              ['50+', 'Projects Completed'],
              ['15', 'Communities Served'],
              ['8yrs', 'Experience'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-3xl font-light text-[#16834b]">{value}</dt>
                <dd className="mt-2 text-slate-600">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="bg-white px-6 py-5 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center sm:mb-7">
            <h2 id="services-heading" className="text-3xl font-light text-[#17643d] md:text-6xl">Services Offered</h2>
            <p className="mt-4 text-slate-600">Comprehensive agricultural consulting tailored to your needs</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ title, description, items }) => (
              <article key={title} className="border border-green-200 p-4 sm:p-5">
                <h3 className="text-2xl font-light text-[#17643d] md:text-3xl">{title}</h3>
                <p className="mt-3 leading-6 text-slate-600">{description}</p>
                <ul className="mt-3 space-y-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600">
                      <Check aria-hidden="true" size={12} className="shrink-0 text-[#16834b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="bg-[#fafafa] px-6 py-6 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <h2 id="projects-heading" className="text-3xl font-light text-[#17643d] md:text-6xl">Featured Projects</h2>
          <p className="mt-4 text-slate-600">Real-world examples of sustainable agriculture in action</p>
          <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-4">
            {projects.map(({ year, title, location, description }) => (
              <article key={title} className="border border-green-200 bg-white p-4 sm:p-5">
                <p className="text-sm font-semibold text-[#16834b]">{year}</p>
                <h3 className="mt-2 text-2xl font-light text-[#17643d] md:text-3xl">{title}</h3>
                <p className="mt-2 flex items-center gap-1 text-slate-500">
                  <span aria-hidden="true">•</span> {location}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-white px-6 py-5 text-center sm:px-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-[#dcfce7] text-[#16834b]">
            <UsersRound aria-hidden="true" size={19} />
          </span>
          <blockquote className="mt-5 text-xl italic leading-7 text-slate-700">
            &ldquo;Pastor Michael&apos;s guidance transformed our farming cooperative. His approach combines technical knowledge with a genuine care for our community. We&apos;ve not only increased our yields by 40%, but we&apos;ve also learned to farm in a way that honors the land.&rdquo;
          </blockquote>
          <p className="mt-5 text-xl font-semibold text-slate-700">Adebayo Oladunji</p>
          <p className="mt-2 text-slate-500">Chairman, Sustainable Cassava Cooperative</p>
        </div>
      </section>

      <section className="bg-[#075b32] px-6 py-5 text-center text-white sm:px-8 sm:py-10">
        <h2 className="text-3xl font-light md:text-6xl">Ready to Transform Your Farm?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
          Let&apos;s discuss how sustainable practices can increase productivity while caring for creation.
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white p-6 font-semibold text-[#075b32] transition-colors hover:bg-green-50"
          >
            Schedule Consultation <ArrowRight aria-hidden="true" size={14} />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center border border-white p-6 font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Services Guide
          </a>
        </div>
      </section>
    </main>
  )
}

export default Agriculture
