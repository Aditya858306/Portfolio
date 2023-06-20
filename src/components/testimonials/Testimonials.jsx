import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sunt, deserunt sit amet maxime est harum dicta error nostrum enim voluptate odio tempore sapiente, voluptas natus aspernatur reprehenderit distinctio facilis?',
  },

  {
    avatar: AVTR2,
    name: 'Shoddy Wales',
    review : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, aperiam recusandae, repellendus voluptas.'
  },

  {
    avatar: AVTR3,
    name: 'Lauren Gotlib',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi animi veniam nulla doloremque non dolores ab rem. Ab, mollitia obcaecati in necessitatibus labore at harum, debitis quam maiores reiciendis, quo eveniet magni exercitationem ducimus.'
  },

  {
    avatar: AVTR4,
    name: 'Remo Dsouza',
    review : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nostrum ducimus mollitia dolorum, cum fugiat libero ipsum molestiae reprehenderit asperiores porro doloremque nulla, accusamus harum eos, itaque nam aut. Repudiandae adipisci ratione unde similique, iste nisi quibusdam ex quod esse ipsam mollitia hic et ad?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      navigation
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials
