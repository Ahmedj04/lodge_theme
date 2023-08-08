import React from 'react'

function Home() {
    return (
        <section className='homeBg bg-[url("/home1.jpg")] lg:bg-[url("/home6.jpg")]  md:h-screen lg:h-screen bg-cover bg-no-repeat md:flex lg:flex-none'>

            <div className='py-10 px-10 md:my-auto'>
                <div className='mb-5'>
                    <div className='md:pb-36 md:w-11/12'>
                        <h1 className='uppercase text-white text-5xl md:text-7xl font-light'>
                            a world of  luxury awaits introducing the lodge hotel
                        </h1>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='md:w-6/12'> 
                        <p className='text-white md:text-lg font-medium text-slate-100'>Immerse yourself in the breathtaking beauty of our coastal paradise, where the rhythmic sounds of the ocean waves provide a soothing backdrop to your stay.</p>
                    </div>

                    <div className='md:w-6/12'>
                        <div className='mt-5'>
                            <div className='flex justify-end'>
                                <div className='border rounded-full py-3'>
                                    <a> <span className=' px-10 uppercase text-white font-bold'>book now</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <style jsx>
                {`
                @media (max-width: 700px) {
                    .homeBg {
                        height:75vh;
                    }
                }
                 
                `}
            </style>
        </section>
    )
}

export default Home