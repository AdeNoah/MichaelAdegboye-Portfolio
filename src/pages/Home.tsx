
import { MoveRight } from 'lucide-react'
import { Church } from 'lucide-react'


const Home = () => {
    return (
        <main className='flex flex-col justify-center '>

            <div className='flex flex-col items-center justify-center bg-[#f5f5f5] h-screen p-2'>
                <h1 className='text-4xl font-light md:text-7xl mb-4'>
                    Rev. Michael <br /><span className='font-semibold'>Adegboye</span> PhD.
                </h1>
                <p className='text-[#525252] mb-4'>
                    Advancing Faith, Knowledge, and Sustainable Impact
                </p>
                <p className='text-[#737373]  text-center mb-8'>
                    A leader bridging spiritual transformation, academic excellence, and agricultural innovationExplore Work
                </p>
                <a href="#three-domains" className='flex gap-2 bg-[#0a0a0a] text-white p-6 font-semibold '>
                    Explore Work <span><MoveRight size={24} aria-hidden="true" /></span>
                </a>
            </div>

            <div id="three-domains" className='h-screen flex flex-col justify-center items-center p-2 scroll-mt-4'>
                <h2 className='text-3xl md:text-6xl mb-4 font-light'>
                    Three Domains, One Vision
                </h2>
                <p className='text-[#525252] mb-16'>
                    Discover how faith, knowledge, and sustainability converge to create lasting impact
                </p>
                <div className='bg-[#fffbeb] flex'>
                    <div className='flex flex-col gap-4 md:gap-8'>
                        <img src="public\ministry.jpg" alt="ministry image: showing the pews and the alter" />
                        <div className='flex flex-col items-start justify-center p-8'>
                            <h3 className='flex gap-4 text-2xl md:text-5xl'>
                                <span className='self-center p-2 bg-[#fef3c7] rounded-full'><Church  aria-hidden="true" /></span>Ministry
                            </h3>
                            <h4 className='text-xl md:text-4xl'>
                                Blessed Generation Ministry
                            </h4>
                            <p className=''>
                                A thriving community dedicated to spiritual growth, worship, and transforming lives through the gospel of Jesus Christ.
                            </p>
                            <p className='flex'>
                                <a href="">Visit Church</a> <span><MoveRight size={24} aria-hidden="true" /></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='h-dvh bg-[#fafafa] flex p-2'>
                <div>
                    <img src="" alt="Michael Adegboye" className='' />
                </div>
                <div>
                    <h2>
                        Rooted in Purpose
                    </h2>
                    <p>
                        Michael Adegboye is a multifaceted leader whose work spans spiritual ministry, academic scholarship, and agricultural innovation. His unique approach integrates faith-based principles with practical expertise to create sustainable impact across communities.
                        <br />
                        As the founder of Blessed Generation Church, an accomplished author and speaker, and a trusted agriculture consultant, Michael demonstrates that diverse callings can harmonize to serve a greater mission.
                    </p>
                    <button className='flex gap-2 bg-[#0a0a0a] text-white p-6 font-semibold'>
                        Learn More <span><MoveRight size={24} aria-hidden="true" /></span>
                    </button>
                </div>
            </div>

            <div className='h-[70dvh] p-2'>
                <h2>
                    Featured Highlights
                </h2>

            </div>

            <div className='h-[70dvh] flex py-24 bg-gradient-to-br from-[#fffbeb] to-[#fff7ed] p-2'>
                <div>
                    <h2>
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
            </div>

            <div className='h-[50dvh] flex flex-col items-center p-2'>
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