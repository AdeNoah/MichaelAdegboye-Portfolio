import { ArrowRight, CalendarDays, Church, Clock3, Gift, MapPin, MoveRight, UsersRound } from "lucide-react"
import { Link } from "react-router"

const ministries = [
  { name: "Youth Ministry", detail: "Ages 13–18" },
  { name: "Children's Church", detail: "Ages 3–12" },
  { name: "Men's Fellowship", detail: "Monthly gatherings" },
  { name: "Women's Ministry", detail: "Weekly meetings" },
  { name: "Worship Team", detail: "Music & arts" },
  { name: "Outreach", detail: "Community service" },
  { name: "Small Groups", detail: "Home fellowships" },
  { name: "Prayer Ministry", detail: "Intercession team" },
]

const Ministry = () => {
  return (
    <main>
      {/* blessed generation church */}
      <section className="flex min-h-[50dvh] items-center border-b border-amber-300 bg-gradient-to-br from-[#fffbeb] to-[#fff7ed] px-6 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
              <Church aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#c2410c]">Ministry</p>
              <h1 className="text-2xl font-light text-[#9a3412] sm:text-3xl">Blessed Generation Church</h1>
            </div>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#9a3412]">
            A vibrant community committed to spiritual growth, authentic worship, and transforming lives through the gospel of Jesus Christ
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              className="inline-flex items-center gap-2 bg-[#c2410c] px-4 py-2 text-xs font-semibold text-white hover:bg-[#9a3412]"
              href="#join-us"
            >
              Plan Your Visit <MoveRight aria-hidden="true" size={14} />
            </a>
            <button className="inline-flex items-center border border-[#c2410c] px-4 py-2 text-xs font-semibold text-[#c2410c] hover:bg-[#fff7ed]">
              Watch Online
            </button>
          </div>
        </div>
      </section>

      {/* our story section  */}
      <section className="bg-white">
        <img
          src="/ministry.jpg"
          alt="Inside Blessed Generation Church"
          className="mx-auto mt-8 aspect-[2.34] w-[90%] max-w-6xl object-cover"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 sm:px-8">
          <div>
            <h2 className="mb-4 text-xl font-light text-[#9a3412]">Our Story</h2>
            <div className="space-y-4 text-xs leading-5 text-slate-700 sm:text-[13px]">
              <p>
            Founded in 2009, Blessed Generation Church was born from a vision to create a spiritual home where people could encounter God authentically, grow in their faith, and discover their purpose.
              </p>
              <p>
            Under the leadership of Pastor Michael Adegboye, the church has grown from a small gathering of believers to a thriving community of over 2,000 members. We are known for our dynamic worship, practical biblical teaching, and commitment to serving our local community.
              </p>
              <p>
            Our name reflects our mission: to see every generation blessed by God's presence and equipped to be a blessing to others. We believe that faith is not just about Sunday services, but about living out God's love in every area of life.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-light text-[#9a3412]">What We Believe</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-950 sm:text-[13px]">The Bible as God's Word</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-600">Scripture is our foundation for faith and practice</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-950 sm:text-[13px]">Salvation Through Jesus</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-600">Christ is the way to eternal life and relationship with God</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-950 sm:text-[13px]">The Power of the Holy Spirit</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-600">The Spirit empowers and guides believers today</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-950 sm:text-[13px]">Community &amp; Service</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-600">We are called to love one another and serve the world</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-950 sm:text-[13px]">Purposeful Living</h3>
                  <p className="mt-1 text-[11px] leading-4 text-slate-600">Every believer has a unique calling and purpose</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* join us section  */}
      <section id="join-us" className="scroll-mt-24 bg-[#fffbeb] px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light text-[#9a3412]">Join Us</h2>
          <p className="mt-3 text-base text-slate-700">
            We'd love to see you at one of our services
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article className="min-h-[250px] border border-[#fcd34d] bg-white p-7">
            <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
              <CalendarDays aria-hidden="true" size={22} />
            </span>
            <h3 className="mb-3 text-xl font-light text-slate-900">Sunday Service</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Clock3 aria-hidden="true" className="shrink-0 text-slate-600" size={16} />
                <span>First Service: 8:00 AM</span>
              </li>
            </ul>
          </article>

          <article className="min-h-[250px] border border-[#fcd34d] bg-white p-7">
            <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
              <CalendarDays aria-hidden="true" size={22} />
            </span>
            <h3 className="mb-3 text-xl font-light text-slate-900">Midweek Programs</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="shrink-0 text-slate-600" size={16} />
                <span>Bible Study: Tuesday, 5:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="shrink-0 text-slate-600" size={16} />
                <span>Prayer Meeting: Thursday, 5:00 PM</span>
              </li>
            </ul>
          </article>

          <article className="min-h-[250px] border border-[#fcd34d] bg-white p-7">
            <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
              <MapPin aria-hidden="true" size={22} />
            </span>
            <h3 className="mb-3 text-xl font-light text-slate-900">Location</h3>
            <address className="mb-2 text-sm not-italic leading-7 text-slate-700">
              Blessed Generation Church Auditorium, Trade Center Kuru
              <br />
              Plateau, Nigeria
            </address>
            <a
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#c2410c] hover:text-[#9a3412]"
              href="http://maps.google.com/maps?q=9.744208,8.837758&ll=9.744208,8.837758&z=17"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <ArrowRight aria-hidden="true" size={16} />
            </a>
          </article>
        </div>
      </section>

      {/* our ministries */}
      <section className="bg-white px-[18px] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light text-[#9a3412]">Our Ministries</h2>
            <p className="mt-4 text-base text-slate-700">
              We offer various ways to connect, grow, and serve
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map(({ name, detail }) => (
              <article key={name} className="min-h-[137px] border border-[#fcd34d] bg-white p-6">
                <UsersRound aria-hidden="true" className="mb-4 text-[#c2410c]" size={22} />
                <h3 className="text-lg font-medium text-slate-950">{name}</h3>
                <p className="mt-1 text-sm text-slate-700">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Support Our Mission section */}
      <section className="bg-[#fffbeb] px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light text-[#9a3412]">Support Our Mission</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
              Your generous support enables us to continue transforming lives, serving our community, and
              building a place where people encounter God's love. Every gift, whether one-time or ongoing,
              makes a meaningful difference in reaching our generation for Christ.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="min-h-[330px] border border-[#fcd34d] bg-white p-8">
              <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
                <Gift aria-hidden="true" size={22} />
              </span>
              <h3 className="mb-3 text-xl font-light text-[#9a3412]">One-Time Giving</h3>
              <p className="mb-4 text-sm leading-6 text-slate-700">
                Make a single gift to support our ministry initiatives, building projects, and community outreach programs.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-amber-600">•</span>Worship &amp; facility maintenance</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span>Community outreach programs</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span>Youth &amp; children's ministry</li>
              </ul>
            </article>

            <article className="min-h-[330px] border border-[#fcd34d] bg-white p-8">
              <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#c2410c]">
                <UsersRound aria-hidden="true" size={22} />
              </span>
              <h3 className="mb-3 text-xl font-light text-[#9a3412]">Ministry Partnership</h3>
              <p className="mb-4 text-sm leading-6 text-slate-700">
                Become a monthly partner and join us in sustaining long-term ministry impact through consistent support.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-amber-600">•</span>Regular ministry updates</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span>Partnership appreciation events</li>
                <li className="flex gap-2"><span className="text-amber-600">•</span>Prayer support &amp; connection</li>
              </ul>
            </article>
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#c2410c] px-8 text-sm font-semibold text-white hover:bg-[#9a3412]"
              href="mailto:maadegboye@yahoo.com?subject=One-Time%20Giving"
            >
              Give Now <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-2 border border-[#c2410c] px-8 text-sm font-semibold text-[#c2410c] hover:bg-[#fff7ed]"
              href="mailto:maadegboye@yahoo.com?subject=Ministry%20Partnership"
            >
              Partner With Us <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-slate-600">
            Blessed Generation Church is a registered non-profit organization. All donations are tax-deductible.
          </p>
        </div>
      </section>

      {/* community section */}
      <section className="grid min-h-[30dvh] place-items-center bg-[#78350f] px-6 py-12 text-center text-white sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-light sm:text-4xl">Experience Community</h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-amber-50 sm:text-lg">
            Whether you're exploring faith for the first time or looking for a church home, you're welcome here.
          </p>
          <Link
            className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-normal text-[#9a3412] transition-colors hover:bg-amber-100"
            to="/contact"
          >
            Plan Your First Visit <MoveRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Ministry