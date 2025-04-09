"use client";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:flex lg:items-center lg:space-x-8">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community{" "}
            <br className="hidden lg:block" />
            components using{" "}
            <span
              className="font-semibold underline decoration-primary"
              aria-label="Typed animation"
            >
              <span ref={el}>Tech</span>
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" />
            bootstrap your new apps, projects or landing sites!
          </p>

          {/* Optional input area — can be used later */}
          {/* <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form className="flex flex-wrap justify-between md:flex-row">
              // You can place input/button here
            </form>
          </div> */}
        </div>

        <div className="w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Tailwind CSS Components Illustration"
            className="w-full h-full max-w-md mx-auto"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
