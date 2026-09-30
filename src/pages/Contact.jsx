
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {

  return (
    <div
      id="Contact-Container"
      className="min-h-[80vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
    >

      <div className="w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black">
            Contact <span className="text-red-600">Us</span>
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg">

            <h2 className="text-2xl font-black mb-6">
              RAJ YADAV
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to contact us for any queries, support or
              information about our products.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-red-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-bold">
                    rajyadav12556@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-red-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-bold">
                    8512894608
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-red-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-bold">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg">

            <h2 className="text-2xl font-black mb-6">
              Send a Message
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 resize-none"
              ></textarea>

              <button
                className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition"
              >
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact
