import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="py-20 dark:bg-gray-900 bg-white z-50 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <div className="relative border hidden order-2 md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src="/assets/hero.jpg"
              alt=""
              className="w-[300px] h-[500px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 "
            />
          </div>
          {/* paragraph section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="text-lg leading-7 mb-6">
              Pitch Hub is an online platform for pitching ideas and investing
              in them to grow a business together with a team of experts and
              investors around the world to help you achieve your dreams and
              goals in life.
            </p>
            <div className="justify-center">
              <h1 className="text-center text-4xl">Our Mission</h1>
              <p className="text-lg leading-7 mb-6">
                Our mission is to eradicate unemployement from Nigeria and the
                world in general. We have a plan that by the year 2030, 80% of
                the nigerian youth will have a startup that earns them money and
                not run after white collar jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
