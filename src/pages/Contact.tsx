import {
  BookOpen,
  Church,
  Mail,
  MapPin,
  MessageSquareText,
  MoveRight,
  Phone,
  Send,
  Sprout,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'

const sheetURL = "https://script.google.com/macros/s/AKfycbws7O1bsLGoHQQ6KmWsyZlWPJ457zVZ5foO70fW25prTmACvjVyAVOO-Gr4WuAvxLBZ/exec"

const handleFormSubmit = async (formData: FormData) => {
  const payload = {
    fullName: formData.get('fullName'),
    emailAddress: formData.get('emailAddress'),
    inquiryType: formData.get('inquiryType'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  const response = await fetch(sheetURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  })

  if (response.type === 'opaque') {
    return
  }

  if (!response.ok) {
    throw new Error(`The submission endpoint returned ${response.status}.`)
  }

  const responseText = await response.text()
  if (responseText) {
    let result: unknown = undefined
    try {
      result = JSON.parse(responseText)
    } catch (error) {
      if (responseText.trimStart().startsWith('{')) {
        throw new Error('The submission endpoint returned an invalid response.', { cause: error })
      }
    }

    if (
      typeof result === 'object' &&
      result !== null &&
      'success' in result &&
      result.success === false
    ) {
      throw new Error('The submission endpoint could not save your message.')
    }
  }
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'maadegboye@yahoo.com' },
  { icon: Phone, label: 'Phone', value: '+234 803 393 8691' },
  { icon: MapPin, label: 'Office', value: 'Blessed Generation Church Auditorium, \n Trade Center Kuru, Plateau, Nigeria' },
]

const inquiryDetails = [
  { icon: Church, label: 'Ministry / Church', value: 'blessedgeneration2002@gmail.com' },
  { icon: BookOpen, label: 'Speaking / Publication', value: 'maadegboye@yahoo.com' },
  { icon: Sprout, label: 'Agriculture Consulting', value: 'tinojog2024@gmail.com' },
]

const inquiryOptions = ['General Inquiry', 'Ministry', 'Publishing', 'Agriculture Consulting', 'Speaking Engagement']

const quickLinks = [
  {
    title: 'Visit the Church',
    description: 'Learn more about Blessed Generation Church and plan your visit',
    accent: 'bg-[#ece8c7]',
    link: '/ministry',
    linkLabel: 'Church Information',
    linkColor: 'text-[#78350f]',
  },
  {
    title: 'Book Speaking',
    description: 'Invite Michael to speak at your event or community gathering',
    accent: 'bg-[#dfeef8]',
    link: '/publications',
    linkLabel: 'Speaking information',
    linkColor: 'text-[#1e3a8a]',
  },
  {
    title: 'Agriculture Consulting',
    description: 'Consultation for your farming project or food security initiative',
    accent: 'bg-[#dfeee4]',
    link: '/agriculture',
    linkLabel: 'Consulting Services',
    linkColor: 'text-[#14532d]',
  },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [submissionError, setSubmissionError] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmissionMessage('')
    setSubmissionError(false)

    try {
      await handleFormSubmit(new FormData(form))
      form.reset()
      setSubmissionMessage('Your message has been sent.')
    } catch (error) {
      setSubmissionError(true)
      setSubmissionMessage(
        error instanceof Error
          ? `Unable to send your message: ${error.message}`
          : 'Unable to send your message. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-8 text-[#1d1d1d] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-light tracking-tight text-[#1d1d1d] md:text-7xl">
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
                      <a
                        href={`mailto:${value}`}
                        className="text-xs text-[#7b7b7b] hover:underline focus-visible:underline"
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>


          {/* form section */}
          <section className="rounded-[10px] border border-[#d9d9d9] bg-[#f8f8f8] p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] sm:p-6">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Full Name*</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    required
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>

                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Email Address*</span>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#333]">
                  <span className="mb-1.5 block">Inquiry Type*</span>
                  <select
                    name="inquiryType"
                    required
                    className="w-full appearance-none rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 pr-8 text-sm text-[#111827] focus:border-[#111827] focus:outline-none"
                  >
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
                    name="subject"
                    placeholder="Brief subject line"
                    required
                    className="w-full rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-[#333]">
                <span className="mb-1.5 block">Message*</span>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us how can help you..."
                  required
                  className="w-full resize-none rounded-md border border-[#cfcfcf] bg-transparent px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#8a8a8a] focus:border-[#111827] focus:outline-none"
                />
              </label>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a1a1a]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} aria-hidden="true" />
                </button>
                {submissionMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={submissionError ? 'text-sm text-red-700' : 'text-sm text-green-700'}
                  >
                    {submissionMessage}
                  </p>
                )}
              </div>
            </form>
          </section>
        </div>

        <section className="mt-16 text-center">
          <h3 className="text-3xl font-light tracking-tight text-[#1d1d1d] md:text-6xl">Looking for Something Specific?</h3>
          <p className="mt-2 text-sm text-[#666]">Quick links to help you find what you need</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickLinks.map(({ title, description, accent, link, linkLabel, linkColor }) => (
              <article key={title} className={`rounded-md border border-[#d7d7d7] ${accent} p-5 text-center`}>
                <div className="mb-5 flex justify-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-[#1f1f1f]">
                    <MessageSquareText size={18} aria-hidden="true" />
                  </span>
                </div>
                <h4 className="mb-2 text-xl font-light text-[#1d1d1d]">{title}</h4>
                <p className="text-sm leading-relaxed text-[#4a4a4a]">{description}</p>
                <Link to={link} className={`mt-4 inline-flex items-center gap-2 font-semibold ${linkColor}`}>
                  {linkLabel}
                  <MoveRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact