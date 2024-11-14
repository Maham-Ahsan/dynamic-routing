import React from "react";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32 '>
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-700 text-center mb-8">
          Contact Us
        </h2>
        <form className="bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>
          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-700 text-white px-6 py-3 rounded-lg hover:bg-cyan-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
