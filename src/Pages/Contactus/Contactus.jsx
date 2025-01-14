import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or store data)
    console.log(formData);
    emailjs
      .send(
        'service_lqnj3yq', // Replace with your EmailJS Service ID
        'template_23qhmhm', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        },
        'j2fMg9nUBtSWrpnPS' // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setFormData({ name: '', email: '', phone: '', address: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  return (
    <section className="bg-gradient-to-r from-[#4a0050] to-[#040025] py-28 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className=" p-8">
            <img src="images/vector8.webp" alt="Contact Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Contact Form Section */}
          <div className=" p-8 text-gray-800">
            <h3 className="text-3xl text-white font-semibold mb-6 text-left">Contact <span className=' text-purple-400'>Me!</span></h3>
            <form onSubmit={handleSubmit}>
              {/* Full Name and Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1">
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 text-white border rounded-md mt-2 focus:outline-none bg-transparent"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 text-white border rounded-md mt-2 focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Phone Number and Address Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1">
                <div className="input-field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 text-white border rounded-md mt-2 focus:outline-none bg-transparent"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 text-white border rounded-md mt-2 focus:outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message Here"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 text-white border rounded-md mt-2 focus:outline-none bg-transparent"
                  rows="5"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="btn-box">
                <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300">
                  Submit
                </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
