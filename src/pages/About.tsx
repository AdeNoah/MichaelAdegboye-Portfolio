import { Award, BookOpen, Church, Sprout } from "lucide-react"

const coreValues = [
    {
        icon: Church,
        iconBg: "bg-[#fef3c7] text-[#b45309]",
        name: "Faith-Centered",
        note: "Grounded in biblical principles and committed to spiritual authenticity",
    },
    {
        icon: BookOpen,
        iconBg: "bg-[#dbeafe] text-[#1d4ed8]",
        name: "Knowledge-Driven",
        note: "Pursuing excellence through continuous learning and intellectual rigor",
    },
    {
        icon: Sprout,
        iconBg: "bg-[#dcfce7] text-[#15803d]",
        name: "Impact-Focused",
        note: "Creating sustainable solutions that transform communities",
    },
]

const About = () => {
    return (
        <main className="mx-auto max-w-6xl px-6 py-10 text-neutral-800 sm:px-8 sm:py-12">
            <section
                aria-labelledby="journey-heading"
                className="flex flex-col items-start gap-8 md:flex-row md:gap-12"
            >
                <img
                    src="/michael.jpg"
                    alt="Michael Adegboye seated at a desk"
                    className="aspect-[3/4] w-full object-cover object-center md:w-0 md:min-w-0 md:flex-1"
                />
                <div className="w-full md:w-0 md:flex-1 md:min-w-0">
                    <h1 id="journey-heading" className="mb-5 text-3xl font-normal tracking-tight">
                        The Journey
                    </h1>
                    <div className="space-y-5 text-base leading-6 text-neutral-600">
                        <p>
                            Michael Adegboye&apos;s journey began with a deep calling to serve and impact lives across multiple spheres of influence. His unique path has led him to become a recognized leader in ministry, academia, and agricultural innovation.
                        </p>
                        <p>
                            As the founder and lead pastor of Blessed Generation Church, Michael has dedicated over 15 years to building a vibrant community of believers committed to spiritual growth and practical service. His ministry emphasizes authentic faith, community transformation, and equipping the next generation of leaders.
                        </p>
                        <p>
                            Beyond the pulpit, Michael is an accomplished author and speaker, having published several books on leadership, faith, and personal development. His academic work bridges theological wisdom with contemporary challenges, offering practical insights for leaders across various fields.
                        </p>
                        <p>
                            In recent years, Michael has expanded his impact into agricultural consultancy, working with farmers and communities to implement sustainable farming practices. This work reflects his commitment to holistic development - addressing not just spiritual needs, but also economic empowerment and environmental stewardship.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="values-heading" className="py-14 sm:py-16">
                <h2 id="values-heading" className="mb-8 text-center text-xl font-medium">
                    Core Values
                </h2>
                <div className="flex flex-col gap-8 sm:flex-col sm:gap-6 md:flex-row">
                    {coreValues.map(({ icon: Icon, iconBg, name, note }) => (
                        <article key={name} className="text-center">
                            <span className={`mb-3 inline-flex rounded-full p-3 ${iconBg}`}>
                                <Icon aria-hidden="true" size={19} />
                            </span>
                            <h3 className="mb-2 text-base font-medium">{name}</h3>
                            <p className="mx-auto max-w-xs text-sm leading-6 text-neutral-600">{note}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                aria-labelledby="credentials-heading"
                className="bg-neutral-50 px-6 py-8 sm:px-10 sm:py-9"
            >
                <h2 id="credentials-heading" className="mb-6 text-xl font-medium">
                    Credentials &amp; Experience
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
                    <div>
                        <h3 className="mb-3 flex items-center gap-2 text-base font-medium">
                            <Award aria-hidden="true" size={17} />
                            Education
                        </h3>
                        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-neutral-600">
                            <li>Ph.D. in Agricultural extension and rural development, University of Ibadan</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 flex items-center gap-2 text-base font-medium">
                            <Award aria-hidden="true" size={17} />
                            Professional Experience
                        </h3>
                        <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-neutral-600">
                            <li>Lead Pastor, Blessed Generation Church (2005-Present)</li>
                            <li>Agriculture Consultant (2015-Present)</li>
                            <li>Published Author of 5 books</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section aria-labelledby="philosophy-heading" className="mx-auto max-w-3xl py-12 text-center sm:py-14">
                <h2 id="philosophy-heading" className="mb-4 text-xl font-medium">
                    Personal Philosophy
                </h2>
                <blockquote className="text-sm italic leading-7 text-neutral-600">
                    &ldquo;True leadership is not about choosing one path, but about honoring every path with excellence. My work in ministry, academia, and agriculture may seem disparate, but they all serve one purpose: to help individuals and communities discover their full potential and live with purpose.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-neutral-500">- Michael Adegboye</p>
            </section>
        </main>
    )
}

export default About
