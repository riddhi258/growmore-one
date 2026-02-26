import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `I want to say thank you to you, which has been really helpful in managing my application from the beginning of doing the skill assessment until my visa is granted. You have been actively in communication with the DHA or VETASSESS to ensure that my application was done in a timely manner. I also kept updated throughout the entire process. Highly recommended`,
    title: "Jovita Indahsari",
    subtitle: "SC190 - PR Visa",
    image: "/assets/test.jpg",
  },
  {
    text: `First of all Mr KrunalBhai has vast knowledge of immigration process he provided me the right guidance according to my profile and always helps me to choose right path, and the best thing is he personally do all the process and take care of their clients. All over it was a best experience i would surely recommend to anyone for any kind of visa.`,
    title: "Rahi",
    subtitle: "SC491 - PR Visa",
    image: "/assets/test.jpg",
  },
  {
    text: `Kunal and the entire team at Growmore were very efficient and professional in handling our file. They had excellent knowledge regarding the immigration matters and were always there to answer our questions whenever we had. Exceptional customer service and communication from the entire team. Thank you.`,
    title: "Kiran H Jani",
    subtitle: "SC - 804 Parents Visa",
    image: "/assets/test.jpg",
  },
  {
    text: `Absolutely amazing service and coordination with the client. Within in a month I have got my approval. Staff is very helpful and cooperative all the time. Thank you so much for your support and help.`,
    title: "Clemy Robert bhai Christy",
    subtitle: "SC485 - Temporary Graduate visa",
    image: "/assets/test.jpg",
  },
  {
    text: `Grow More team is highly professional and very helpful. Special thanks to Kunal who really gave us the correct guidance and helped us to get the parents visa for our parents. I would highly recommend Kunal and his team for immigration services and to get your visa granted easily and without any hassle.`,
    title: "Dhwanil Jani",
    subtitle: "SC - 804 Parents Visa",
    image: "/assets/test.jpg",
  },
  {
    text: `Grow More team is highly professional and very helpful. Special thanks to Kunal who really gave us the correct guidance and helped us to get the parents visa for our parents. I would highly recommend Kunal and his team for immigration services and to get your visa granted easily and without any hassle.`,
    title: "Student Visa",
    subtitle: "SC600 VisitorVisa/SC500 - Student Visa",
    image: "/assets/test.jpg",
  },
  {
    text: `They work with full dedication. Entire team is very supportive. Query get resolved quickly. Staff is very responsive. They prepare file very accurately, so the chances of rejection are minimised`,
    title: "Krunalkumar Jaykumar Shah",
    subtitle: "SC491 - PR Visa",
    image: "/assets/test.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[index];

  return (
    <section className="relative py-20 px-4 bg-[#eff9fb] overflow-hidden rounded-[60px] m-3">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/assets/wave.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold tracking-widest mb-4">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="text-xl md:text-5xl  leading-tight">
            Escape to <span className="text-green-500">Extraordinary</span>
            <br />
            Where Every <span className="font-bold">Journey</span> Finds Its
            Voice
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-lg relative min-h-[350px]">
            <p className="text-[#164750] text-lg leading-relaxed whitespace-pre-line mb-8">
              {item.text}
            </p>

            <div>
              <h4 className="text-xl font-semibold text-[#1F4E55]">
                {item.title}
              </h4>
              <p className="text-gray-500">{item.subtitle}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#eff9fb] flex items-center justify-center transition"
              >
                <ChevronLeft size={20} className="text-[#164750] font-bold" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eff9fb] flex items-center justify-center  transition"
              >
                <ChevronRight size={20} className="text-[#164750] font-bold" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt="testimonial"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
