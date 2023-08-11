import React from 'react'
import Carousel from 'better-react-carousel';


function Review({data}) {
    return (
        <section className='bg-[url("/home1.jpg")] bg-cover bg-no-repeat '>
            <div className='py-10 px-5 text-white'>
                <div>
                    <div className='mb-5'>
                        <div className='text-center'>
                            <h6 className=''>TESTIMONIALS</h6>
                        </div>
                    </div>

                    <div>

                        <Carousel cols={1} rows={1} gap={10} autoPlay={1000} loop={true}
                            responsiveLayout={[
                                {
                                    breakpoint: 480,
                                    cols: 2,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                    autoplay: 1000
                                },
                                {
                                    breakpoint: 810,
                                    cols: 2,
                                    rows: 1,
                                    gap: 20,
                                    loop: true,
                                    autoplay: 1000
                                },
                                {
                                    breakpoint: 1020,
                                    cols: 2,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                    autoplay: 1000
                                },
                                {
                                    breakpoint: 1024,
                                    cols: 2,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                    autoplay: 1000
                                },
                                {
                                    breakpoint: 1280,
                                    cols:2,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                    autoplay: 1000
                                },
                            ]}
                        >
                            {data?.map((resource, index) => {
                                return (
                                    <Carousel.Item key={index} >

                                        <p className={`text-center  tracking-wide`}>{resource?.review_content}</p>

                                        <p className={`text-center  tracking-wide py-10`}>{resource?.review_author}</p>


                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Review