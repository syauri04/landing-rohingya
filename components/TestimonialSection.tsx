"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    quote: "“Home is a shelter from storm-all sort for storms.”",
    author: "William J. Benne",
  },
  {
    quote: "“A house protects the body, but a home protects the soul.”",
    author: "Amina Rahman",
  },
  {
    quote: "“Wherever my family gathers, that is where I belong.”",
    author: "Farid Hussain",
  },
] as const;

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="relative bg-[#F3ED9B] bg-[url('/assets/bg-texture-yellow.png')] bg-cover bg-center bg-no-repeat py-6 "
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          loop
          allowTouchMove={false}
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="mx-auto flex min-h-[400px] max-w-3xl flex-col items-center justify-center text-center sm:min-h-[600px]">
                <p className="font-google-sans text-3xl font-bold leading-snug text-black sm:text-4xl md:text-[60px] md:leading-[75px]">
                  {t.quote}
                </p>
                <p className="mt-10 font-google-sans text-lg text-black md:text-[25px] md:leading-[31px]">
                  —{t.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
