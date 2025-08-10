import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function Home() {
  let [post, setPost] = useState([])
  let [catpost, setCatpost] = useState([])
  let [internpost, setInternpost] = useState([])
  let [arpost, setArpost] = useState([])

  useEffect(() => {
    fetch('https://bankingkhabar.com/wp-json/wp/v2/posts').then(a => a.json()).then(b => setPost(b))
    fetch('https://bankingkhabar.com/wp-json/wp/v2/posts?categories=2').then(a => a.json()).then(b => setCatpost(b))
    fetch('https://bankingkhabar.com/wp-json/wp/v2/posts?categories=71').then(a => a.json()).then(b => setInternpost(b))
    fetch('https://bankingkhabar.com/wp-json/wp/v2/posts?categories=89').then(a => a.json()).then(b => setArpost(b))

  }, [])
  return (
    <>
      <section className='py-5'>
        <div className="container mx-auto">
          {post.slice(0, 4).map(a => <article key={a.id} className='text-center shadow-lg p-3'>
            <h1 className='text-4xl text-red-600 font-bold py-6'> {a.title.rendered}</h1>
            <img src={a.featured_image_src} className='mx-auto' alt="" />
          </article>)}
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h2 className='font-bold py-2 bg-red-700 text-white p2'> अन्तरवार्ता </h2>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >

            {catpost.slice(0, 8).map((a) => (

              <SwiperSlide key={a.id}>
                <div className='shadow p-2' >
                  <img src={a.featured_image_src} alt="" />
                  <h3 className='font-bold py-2'> {a.title.rendered}</h3>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </section>

      <section>
        <div className="container mx-auto">
          <h2 className='font-bold py-2 bg-red-700 text-white p2'> अन्तर्राष्ट्रिय बैंकिङ </h2>

          <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
              {internpost.slice(0, 8).map((a) => (
                <div className='shadow p-2' key={a.id}>
                  <img src={a.featured_image_src} alt="" />
                  <h3 className='font-bold py-2'> {a.title.rendered}</h3>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-gray-300">

          <h2 className='font-bold py-2 bg-red-700 text-white p2'> अर्थ </h2>
          <div className="flex">
            
            <div className="grid grid-cols-2 gap-4 w-[70%] m-4 bg-white">
          
              {arpost.slice(0, 4).map((a) => (
                  <div className='shadow p-2 m-2' key={a.id}>
                    <img src={a.featured_image_src} alt="" />
                    <h3 className='font-bold py-2'> {a.title.rendered}</h3>
                  </div>
              ))}
            </div>

            <div className='w-[30%]  m-4 bg-white'>
              <h2 className='w-[100%] font-bold py-2 bg-red-700 text-white  '>MORE NEWS</h2>
              {arpost.slice(6, 9).map((a) => (
                  <div className='shadow p-2 m-2' key={a.id}>
                    <img src={a.featured_image_src} alt="" />
                    <h3 className='font-bold py-2'> {a.title.rendered}</h3>
                  </div>
              ))}    
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
