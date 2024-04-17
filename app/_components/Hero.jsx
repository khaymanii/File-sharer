import React from "react";
import Constant from "../_utils/Constant";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-blue-700">Upload, Save</span> and easily{" "}
            <span className="text-blue-700">Share</span> your files in one place
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            {Constant.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/files"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
