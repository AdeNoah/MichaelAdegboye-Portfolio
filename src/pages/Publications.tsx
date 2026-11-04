import { ArrowRight, BookOpen, } from 'lucide-react'

const books = [
  {
    year: '2022',
    title: "Assessment of the Causes and Consequeses of School Dropouts among Government Secondary School Students in Owerri Municipal Council of Imo Statey",
  },
  {
    year: '2016',
    title: 'Effect of participation in community-based agriculture and rural development project on socio-economic status of rural dwellers in Northern Nigeria.',
  },
  {
    year: '2016',
    title: 'Socio-economic status categories of rural dwellers in northern Nigeria.',
  },
  {
    year: '2015',
    title: "Construction of a socio-economic status scale for rural dwellers in northern Nigeria.",
  },
]

// const articles = [
//   {
//     category: 'Research',
//     title: '',
//     publication: 'Christian Today Magazine',
//     date: 'March 2026',
//   },
//   {
//     category: 'Agriculture',
//     title: 'The Intersection of Faith and Agriculture',
//     publication: 'Agriculture & Rural Journal',
//     date: 'January 2026',
//   },
//   {
//     category: 'Ministry',
//     title: 'Raising the Next Generation of Leaders',
//     publication: 'Ministry Quarterly',
//     date: 'November 2025',
//   },
// ]

// const engagements = [
//   {
//     date: 'May 2026',
//     title: 'Global Leadership Summit',
//     location: 'Nairobi, Kenya',
//     topic: 'Topic: Authentic Leadership in the Modern Era',
//   },
//   {
//     date: 'March 2026',
//     title: 'African Agriculture Conference',
//     location: 'Accra, Ghana',
//     topic: 'Topic: Sustainable Farming & Faith Communities',
//   },
//   {
//     date: 'February 2026',
//     title: 'Ministry Excellence Forum',
//     location: 'Lagos, Nigeria',
//     topic: 'Topic: Building Multi-Generational Churches',
//   },
// ]

const Publications = () => {
  return (
    <main className="text-[#34304f]">
      <section
        aria-labelledby="publications-heading"
        className="bg-[#eef2ff] px-6 py-8 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#c7d2fe] text-[#4338ca] md:size-16">
              <BookOpen aria-hidden="true" className="size-7 md:size-10" />
            </span>
            <div>
              <p className="text-sm uppercase tracking-wide text-[#4f46e5]">
                Publications
              </p>
              <h1
                id="publications-heading"
                className="text-3xl font-light text-[#3730a3] md:text-6xl"
              >
                Writing Research Proposal for Academic and Grant Pursuits
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl leading-7 text-[#514a83]">
            Books, articles, and speaking engagements exploring theology, leadership, and
            practical wisdom for contemporary challenges
          </p>
        </div>
      </section>

      <section
        aria-labelledby="published-books-heading"
        className="mx-auto max-w-6xl px-6 py-5 sm:px-8"
      >
        <h2
          id="published-books-heading"
          className="text-3xl font-light text-[#3730a3] md:text-6xl"
        >
          Published Books
        </h2>
        <p className="mt-4 text-[#706b88]">
          Comprehensive published works on faith, leadership, and societal transformation
        </p>

        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-3 min-[440px]:grid-cols-2 sm:gap-x-8">
          {books.map(({ year, title,  }) => (
            <article key={title} className="flex items-start gap-2">
              <div
                aria-hidden="true"
                className="flex aspect-[3/4] w-11 shrink-0 items-center justify-center bg-gradient-to-br from-[#c7d2fe] to-[#a5b4fc] text-[#3730a3]"
              >
                <BookOpen size={15} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p className="text-sm leading-5 text-[#4f46e5]">{year}</p>
                <h3 className="text-xl font-medium leading-6 text-[#3730a3]">{title}</h3>
                
                <a
                  href="mailto:maadegboye@yahoo.com?subject=Book%20inquiry"
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-[#4338ca] hover:text-[#312e81]"
                >
                  Learn More <ArrowRight aria-hidden="true" size={9} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="featured-book-heading"
        className="bg-[#eef2ff] px-6 py-5 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 min-[440px]:grid-cols-2 sm:gap-12">
          <div
            aria-label="The Leader's Journey book cover"
            className="flex aspect-[3/4] w-full max-w-sm flex-col items-center justify-center bg-gradient-to-br from-[#a5b4fc] to-[#818cf8] px-6 text-center text-white"
          >
            <BookOpen aria-hidden="true" className="mb-3" size={28} strokeWidth={1.8} />
            <p className="text-3xl font-light leading-tight md:text-6xl">
              Writing Research Proposal for Academic and Grant Pursuits
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-[#4f46e5]">
              Featured Book
            </p>
            <h2
              id="featured-book-heading"
              className="mt-2 text-3xl font-light text-[#3730a3] md:text-6xl"
            >
              Writing Research Proposal for Academic and Grant Pursuits
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-[#514a83]">
              <p>
              </p>
            </div>
            <div className="mt-3 flex flex-wrap items-start gap-1">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#4338ca] px-6 py-4 font-semibold text-white hover:bg-[#3730a3]"
              >
                Purchase Book <ArrowRight aria-hidden="true" size={9} />
              </a>
              <details className="group">
                <summary className="cursor-pointer list-none border border-[#4338ca] px-6 py-4 font-semibold text-[#3730a3] hover:bg-white/60 [&::-webkit-details-marker]:hidden">
                  Read Sample Chapter
                </summary>
                <p className="mt-4 leading-7 text-[#514a83]">
                  The purpose of any research proposal is to ensure that the candidate has done sufficient preliminary reading/investigation in the area of interest and has thought about the issues involved and able to provide more than a broad description of the topic for which the research is planned. Students are expected to prepare a research proposal and defend it in order for the supervisors to assess the worth,
                  viability,
                  possibility/feasibility of the study. As a foundation gives a clue to the shape and quality of a building, a proposal helps to make a face judgment of the quality expected from the research by the time it is finally carried out.
                  Ogolo (1996) identified the following as the importance of a research proposal:
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* unconfirmable recent articles */}

      {/* <section
        aria-labelledby="recent-articles-heading"
        className="mx-auto max-w-6xl px-6 py-6 sm:px-8"
      >
        <h2
          id="recent-articles-heading"
          className="text-3xl font-light text-[#3730a3] md:text-6xl"
        >
          Recent Articles
        </h2>
        <p className="mt-4 text-[#706b88]">
          Published writing on faith, leadership, and societal transformation
        </p>

        <div className="mt-4 space-y-2">
          {articles.map(({ category, title, publication, date }) => (
            <article
              key={title}
              className="border border-[#c7d2fe] px-3 py-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-sm text-[#4338ca]">
                    {category}
                  </span>
                  <h3 className="mt-2 text-xl font-medium leading-6 text-[#3730a3]">
                    {title}
                  </h3>
                  <p className="mt-2 leading-6 text-[#706b88]">
                    {publication}
                  </p>
                </div>
                <time className="shrink-0 pt-1 text-sm text-[#706b88]">
                  {date}
                </time>
              </div>
              <a
                href={`mailto:maadegboye@yahoo.com?subject=${encodeURIComponent(`Article inquiry: ${title}`)}`}
                className="mt-2 inline-flex items-center gap-2 font-semibold text-[#4338ca] hover:text-[#312e81]"
              >
                Read Article <ArrowRight aria-hidden="true" size={9} />
              </a>
            </article>
          ))}
        </div>
      </section> */}

      {/* unconfirmable engagements  */}

      {/* <section
        aria-labelledby="speaking-engagements-heading"
        className="bg-[#fafafa] px-6 py-6 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="speaking-engagements-heading"
            className="text-3xl font-light text-[#3730a3] md:text-6xl"
          >
            Speaking Engagements
          </h2>
          <p className="mt-4 text-[#706b88]">
            Upcoming conferences and events
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2 min-[440px]:grid-cols-2 md:grid-cols-3">
            {engagements.map(({ date, title, location, topic }) => (
              <article
                key={title}
                className="border border-[#c7d2fe] bg-white px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#4338ca]">
                    <CalendarDays aria-hidden="true" size={10} />
                  </span>
                  <div>
                    <p className="text-sm text-[#4f46e5]">{date}</p>
                    <h3 className="text-xl font-medium leading-6 text-[#3730a3]">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 leading-6 text-[#706b88]">{location}</p>
                <p className="mt-2 leading-6 text-[#514a83]">{topic}</p>
                <a
                  href={`mailto:maadegboye@yahoo.com?subject=${encodeURIComponent(`Speaking engagement: ${title}`)}`}
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-[#4338ca] hover:text-[#312e81]"
                >
                  Event Details <ArrowRight aria-hidden="true" size={9} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section
        aria-labelledby="book-michael-heading"
        className="bg-[#312e81] px-6 py-7 text-center text-white"
      >
        <h2 id="book-michael-heading" className="text-3xl font-light md:text-6xl">
          Book Michael to Speak
        </h2>
        <p className="mt-4 leading-7 text-indigo-100">
          Invite Michael to share his insights at your conference, church, or organization.
        </p>
        <a
          href="mailto:maadegboye@yahoo.com?subject=Speaking%20inquiry"
          className="mt-6 inline-flex items-center gap-2 bg-white px-6 py-4 font-medium text-[#312e81] hover:bg-indigo-50"
        >
          Speaking Inquiry <ArrowRight aria-hidden="true" size={9} />
        </a>
      </section>
    </main>
  )
}

export default Publications
