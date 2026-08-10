"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    quote:
      "“In the world that denies treating me as a human being, it is through writing that I exist as a human being at least in a world I imagine.”",
    author: "",
  },
  {
    quote:
      "“Ultimately, hope is the torch that leads us to our path and destination. And as long as we continue to share our stories, that light will continue to burn bright.”",
    author: "",
  },
  {
    quote:
      "“Our stories matter, even the unfinished ones. We are not just our suffering. We are survivors and leaders, and we deserve the chance to become who we were always meant to be.”",
    author: "",
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
              <div className="mx-auto flex min-h-[400px] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[700px]">
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
