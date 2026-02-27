import React from "react";

const Brochures = () => {
  const brochures = [
    {
      id: 1,
      title: "Student Visa - Australia",
      image: "/assets/b1.jpg",
      file: "/assets/student-visa-brochure.pdf", // optional download file
    },
  ];

  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Brochures
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Brochures
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((brochure) => (
            <div
              key={brochure.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={brochure.image}
                  alt={brochure.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#163c3d] mb-4 leading-snug">
                  {brochure.title}
                </h3>

                {/* Download Button */}
                <div className="mt-auto">
                  <a
                    href={brochure.file}
                    download
                    className="text-[#6dc7d1] font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3"
                  >
                    DOWNLOAD NOW
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Brochures;