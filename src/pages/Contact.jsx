import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email or store form data
    console.log(formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="text-center py-16 bg-purple-600 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">We're here to help. Reach out to us for any queries or assistance.</p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center">Get In Touch</h2>
        <p className="text-lg mt-4 text-center text-gray-700">
          Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter your message"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Additional Contact Information Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Other Ways to Reach Us</h2>
          <p className="text-lg mt-4 text-gray-700">
            If you prefer, you can also reach out to us through the following methods:
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-lg font-medium text-gray-700">
              <strong>Email:</strong> support@aidbridge.org
            </p>
            <p className="text-lg font-medium text-gray-700">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-lg font-medium text-gray-700">
              <strong>Address:</strong> 123 AidBridge St, City, Country
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-600 py-6 text-white text-center">
        <p>&copy; 2024 AidBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
