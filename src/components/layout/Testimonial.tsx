import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    review:
      "This platform completely transformed how we manage leads and permissions. The UI feels incredibly smooth and modern.",
  },
  {
    id: 2,
    name: "David Miller",
    role: "CEO",
    company: "CloudSync",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    review:
      "The best CRM experience we've had so far. Fast, scalable, and beautifully designed for growing teams.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Operations Head",
    company: "NovaTech",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    review:
      "Managing users and permissions became effortless. The dashboard is clean and extremely intuitive.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder",
    company: "BrightLabs",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    review:
      "A premium SaaS experience with excellent performance. Our team productivity improved immediately.",
  },
  {
    id: 5,
    name: "Sophia Brown",
    role: "Marketing Director",
    company: "ScaleX",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    review:
      "Absolutely love the animations and smooth workflow. Everything feels polished and enterprise-ready.",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            Trusted by teams worldwide
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            See what fast-growing companies say about our platform
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        //   navigation
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  border
                  border-slate-100
                  h-full
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  group
                "
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-slate-600 leading-8 mb-8">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border-2
                      border-cyan-400
                    "
                  />

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;