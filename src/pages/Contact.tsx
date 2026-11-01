import {
  BookOpen,
  Church,
  Mail,
  MapPin,
  MessageSquareText,
  MoveRight,
  Phone,
  Sprout,
} from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@michaeladegboye.com' },
  { icon: Phone, label: 'Phone', value: '+234 123 456 7890' },
  { icon: MapPin, label: 'Office', value: '123 Faith Avenue\nLagos, Nigeria' },
]

const inquiryDetails = [
  { icon: Church, label: 'Ministry / Church', value: 'hello@blessedgeneration.org' },
  { icon: BookOpen, label: 'Speaking / Publication', value: 'speaker@bookings.com' },
  { icon: Sprout, label: 'Agriculture Consulting', value: 'agri@consulting.com' },
]

const inquiryOptions = ['General Inquiry', 'Ministry', 'Publishing', 'Agriculture Consulting', 'Speaking Engagement']

const quickLinks = [
  {
    title: 'Visit the Church',
    description: 'Learn more about Blessed Generation Church and plan your visit',
    accent: 'bg-[#ece8c7]',
  },
  {
    title: 'Book Speaking',
    description: 'Invite Michael to speak at your event or community gathering',
    accent: 'bg-[#dfeef8]',
  },
  {
    title: 'Agriculture Consulting',
    description: 'Consultation for your farming project or food security initiative',
    accent: 'bg-[#dfeee4]',
  },
]

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-8 text-[#1d1d1d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-light tracking-tight text-[#1d1d1d] md:text-[3.5rem]">
            Get in Touch
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6a6a6a] md:text-base">
            Whether you&apos;re seeking spiritual guidance, academic insight, or agricultural expertise,
            I&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:pt-3">
            <h2 className="mb-5 text-2xl font-light text-[#202020]">Contact Information</h2>
            <ul className="space-y-4 text-sm text-[#3a3a3a]">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-[#2f2f2f]">
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-[#1d1d1d]">{label}</p>
                    <p className="mt-0.5 whitespace-pre-line text-[#5e5e5e]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-[#1d1d1d]">Specific Inquiries</p>
              <ul className="space-y-2 text-sm text-[#5e5e5e]">
                {inquiryDetails.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 items-center justify-center text-[#2f2f2f]">
                      <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <p>{label}</p>
                      <p className="text-xs text-[#7b7b7b]">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="rounded-[10px] border border-[#d9d9d9] bg-[#f8f8f8] p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-6">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Full Name*</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Email Address*</span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Inquiry Type*</span>
                  <select className="w-full appearance-none rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 pr-8 text-sm text-[#111827] focus:border-[#111827] focus:outline-none">
                    {inquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Subject*</span>
                  <input
                    type="text"
                    placeholder="Brief subject line"
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-[#333]">
                <span className="mb-1.5 block">Message*</span>
                <textarea
                  rows={6}
                  placeholder="Tell us how can help you..."
                  className="w-full resize-none rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                />
              </label>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a1a1a]"
                >
                  Send Message
                  <MoveRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="mt-16 text-center">
          <h3 className="text-[2.2rem] font-light tracking-tight text-[#1d1d1d]">Looking for Something Specific?</h3>
          <p className="mt-2 text-sm text-[#666]">Quick links to help you find what you need</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickLinks.map(({ title, description, accent }) => (
              <article key={title} className={`rounded-md border border-[#d7d7d7] ${accent} p-5 text-left`}>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-[#1f1f1f]">
                    <MessageSquareText size={18} aria-hidden="true" />
                  </span>
                  <MoveRight size={18} aria-hidden="true" className="text-[#1d1d1d]" />
                </div>
                <h4 className="mb-2 text-xl font-light text-[#1d1d1d]">{title}</h4>
                <p className="text-sm leading-relaxed text-[#4a4a4a]">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact