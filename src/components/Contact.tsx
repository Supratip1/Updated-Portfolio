import { Mail, MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_0evqnuo', // Your EmailJS service ID
        'template_enuh695', // Your EmailJS template ID
        formRef.current,
        'oGlAvxECdp-vf_t-T' // Your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated header with gradient effect */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900">Let's talk about everything!</h3>
            <p className="text-gray-600">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">supratipbhattacharya2@gmail.com</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900 font-medium">Bangalore, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            {/* Sender Name */}
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="from_name" // Matches EmailJS template variable
                id="from_name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Sender Email */}
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="reply_to" // Matches EmailJS template variable
                id="reply_to"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Matches EmailJS template variable
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
