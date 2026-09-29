
 
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="min-h-screen w-full overflow-hidden dark:bg-black dark:text-white bg-white text-gray-900">
      
      <section className="relative px-6 py-20 sm:py-28">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-200/40 blur-[120px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">

          <span className="inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600">
            About Our Store
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Shopping Made
            <span className="block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Simple & Premium
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            We created a modern shopping experience where quality products,
            simple browsing and a smooth checkout come together in one place.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-purple-600">
              Our Story
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Built for a better shopping experience.
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Our goal is simple — make online shopping easy, fast and
              enjoyable. From discovering products to adding them to your
              cart, every part of the experience is designed with simplicity
              in mind.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              We focus on bringing together useful products, clean design and
              a smooth user experience so customers can shop without
              unnecessary complexity.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition duration-300 hover:scale-105"
            >
              Explore Products
            </Link>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-purple-100 blur-3xl" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/60">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-3xl font-bold text-purple-600">
                    10K+
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Products
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-3xl font-bold text-fuchsia-500">
                    5K+
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Customers
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-3xl font-bold text-purple-600">
                    24/7
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Support
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-3xl font-bold text-fuchsia-500">
                    4.9★
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Rating
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-gray-50 dark:bg-black dark:text-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need to shop better
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-200 dark:bg-zinc-800 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-lg">
              <div className="mb-5 text-3xl">⚡</div>
              <h3 className="text-xl font-semibold">Fast Experience</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Smooth navigation and quick product discovery.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200  dark:bg-zinc-800 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-lg">
              <div className="mb-5 text-3xl">🔒</div>
              <h3 className="text-xl font-semibold">Secure Shopping</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                A reliable and secure shopping experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200  dark:bg-zinc-800 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-lg">
              <div className="mb-5 text-3xl">🚚</div>
              <h3 className="text-xl font-semibold">Easy Delivery</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                Simple ordering and convenient delivery experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200  dark:bg-zinc-800 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-lg">
              <div className="mb-5 text-3xl">💜</div>
              <h3 className="text-xl font-semibold">Customer First</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                We focus on making every interaction simple and helpful.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-14 text-center text-white shadow-xl shadow-purple-200">

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to discover something new?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-purple-100">
              Explore our collection and find products made for your everyday
              needs.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-purple-600 transition duration-300 hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;

