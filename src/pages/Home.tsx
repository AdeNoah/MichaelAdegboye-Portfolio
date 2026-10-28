
import { BookOpen, Church, MoveRight, Sprout } from 'lucide-react'
import { Link } from 'react-router'

const domains = [
    {
        title: 'Ministry',
        subtitle: 'Blessed Generation Ministry',
        description: 'A thriving community dedicated to spiritual growth, worship, and transforming lives through the gospel of Jesus Christ.',
        link: '/ministry',
        linkLabel: 'Visit Church',
        image: '/ministry.jpg',
        icon: Church,
        background: 'bg-[#fffbeb]',
        iconBackground: 'bg-[#fef3c7]',
        linkColor: 'text-[#78350f]'
    },
    {
        title: 'Publications',
        subtitle: 'Thought Leadership',
        description: 'Books, articles, and speaking engagements exploring theology, leadership, and practical wisdom for contemporary challenges.',
        link: '/publications',
        linkLabel: 'Explore Publications',
        image: '/publications.jpg',
        icon: BookOpen,
        background: 'bg-[#eff6ff]',
        iconBackground: 'bg-[#dbeafe]',
        linkColor: 'text-[#1e3a8a]',
    },
    {
        title: 'Agriculture',
        subtitle: 'Consultancy Services',
        description: 'Professional guidance in sustainable farming, agricultural innovation, and building resilient food systems for communities.',
        link: '/agriculture',
        linkLabel: 'Explore Agriculture',
        image: '/agriculture.jpg',
        icon: Sprout,
        background: 'bg-[#f0fdf4]',
        iconBackground: 'bg-[#dcfce7]',
        linkColor: 'text-[#14532d]',
    },
]

const Home = () => {
    return (
        <main className='flex flex-col justify-center '>

{/* home section  */}
            <div className='flex flex-col items-center justify-center bg-[#f5f5f5] min-h-dvh p-2'>
                <h1 className='text-4xl font-light md:text-7xl mb-4'>
                    Rev. Michael <br /><span className='font-semibold'>Adegboye</span> PhD.
                </h1>
                <p className='text-[#525252] mb-4 text-center'>
                    Advancing Faith, Knowledge, and Sustainable Impact
                </p>
                <p className='text-[#737373]  text-center mb-8'>
                    A leader bridging spiritual transformation, academic excellence, and agricultural innovationExplore Work
                </p>
                <a href="#three-domains" className='flex gap-2 bg-[#0a0a0a] text-white p-6 font-semibold '>
                    Explore Work <span><MoveRight size={24} aria-hidden="true" /></span>
                </a>
            </div>

{/* three domains section  */}
            <section id="three-domains" className="flex min-h-dvh scroll-mt-4 flex-col items-center justify-center px-4 py-16">
                <h2 className="mb-4 text-center text-3xl font-light md:text-6xl">
                    Three Domains, One Vision
                </h2>
                <p className="mb-10 max-w-2xl text-center text-[#525252]">
                    Discover how faith, knowledge, and sustainability converge to create lasting impact
                </p>

                <div className="grid w-full max-w-6xl gap-6 md:grid-cols-3">
                    {domains.map(({ title, subtitle, description, link, linkLabel, image, icon: Icon, background, iconBackground, linkColor }) => (
                        <article key={title} className={`flex h-full flex-col overflow-hidden rounded-lg ${background}`}>
                            {image ? (
                                <img
                                    src={image}
                                    alt="subtitle"
                                    className="aspect-video w-full object-cover"
                                />
                            ) : (
                                <div className="flex aspect-video items-center justify-center">
                                    <Icon size={64} strokeWidth={1.5} aria-hidden="true" />
                                </div>
                            )}

                            <div className="flex flex-1 flex-col items-start p-6 sm:pt-8">
                                <h3 className="mb-5 flex items-center gap-3 text-2xl md:text-3xl">
                                    <span className={`rounded-full p-2 ${iconBackground}`}>
                                        <Icon aria-hidden="true" />
                                    </span>
                                    {title}
                                </h3>
                                <h4 className="mb-3 text-lg font-semibold sm:text-xl">
                                    {subtitle}
                                </h4>
                                <p className="mb-6 flex-1 text-left text-[#525252]">
                                    {description}
                                </p>
                                <Link to={link} className={`flex items-center gap-2 font-semibold ${linkColor}`}>
                                    {linkLabel} <MoveRight size={24} aria-hidden="true" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

{/* roooted in purpose section */}
            <div className='min-h-dvh bg-[#fafafa] grid max-w-screen md:grid-cols-2 justify-center items-center p-4 gap-8 md:p-8 '>
                <div>
                    <img src="/michael.jpg" alt="Michael Adegboye" className="h-full w-full object-cover" />
                </div>
                <div>
                    <h2 className='text-3xl md:text-6xl  font-light mb-8'>
                        Rooted in Purpose
                    </h2>
                    <p className='text-[#525252] mb-8'>
                        Michael Adegboye is a multifaceted leader whose work spans spiritual ministry, academic scholarship, and agricultural innovation. His unique approach integrates faith-based principles with practical expertise to create sustainable impact across communities.
                        <br />
                        As the founder of Blessed Generation Church, an accomplished author and speaker, and a trusted agriculture consultant, Michael demonstrates that diverse callings can harmonize to serve a greater mission.
                    </p>
                    <Link to="/about" className='flex gap-2 bg-[#0a0a0a] text-white p-6 font-semibold w-fit'>
                        Learn More <MoveRight size={24} aria-hidden="true" />
                    </Link>
                </div>
            </div>

{/* featured highlight section */}
            <div className='h-[70dvh] p-2 flex flex-col justify-center items-center'>
                <h2 className='text-3xl md:text-6xl font-light'>
                    Featured Highlights
                </h2>
                <p>
                    Recent work across ministry, publications and consultancy 
                </p>
            </div>

{/* support section  */}
            <div className='min-h-[70dvh] flex py-24 bg-gradient-to-br from-[#fffbeb] to-[#fff7ed] p-2'>
                <div>
                    <h2 className='text-3xl md:text-6xl font-light'>
                        Support Our Mission
                    </h2>
                    <p>
                        Partner with us in advancing faith, knowledge, and sustainable impact across communities. Your support enables ministry outreach, educational resources, and agricultural programs that transform lives.
                        <br />
                        Whether through one-time gifts or ongoing partnership, every contribution makes a meaningful difference in reaching people with hope and practical solutions.
                    </p>
                    <div>
                        <button>
                            Give Now <span><MoveRight size={24} aria-hidden="true" /></span>
                        </button>

                        <button>
                            Learn More <span><MoveRight size={24} aria-hidden="true" /></span>
                        </button>

                    </div>
                </div>

                <div>
                    <div></div>
                </div>
            </div>

{/* lets connect section */}
            <div className='min-h-[50dvh] flex flex-col items-center p-2'>
                <h2>
                    Let's connect
                </h2>

                <p>
                    Whether you're seeking spiritual guidance, academic insight, or agricultural expertise, I'd love to hear from you.
                </p>
                <button className='flex '>
                    Get in Touch <span><MoveRight size={24} aria-hidden="true" /></span>
                </button>
            </div>
        </main>

    )
}

export default Home