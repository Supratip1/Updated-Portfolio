// Importing required components and icons
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

const icons = {
  work: '/work-icon.png',
  education: '/education-icon.png',
  newscorp: '/newscorp.png',
  tcs: '/tcs.jpg',
  fiem: '/fiem.jpg',
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-x-6 lg:space-y-0 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Icon */}
                <div
                  className={`flex justify-center items-center w-12 h-12 rounded-full bg-indigo-600 mb-4 lg:mb-0 lg:absolute lg:top-0 lg:left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0 ? 'lg:left-[calc(50% + 1rem)]' : 'lg:left-[calc(50% - 1rem)]'
                  }`}
                >
                  {icons[item.icon] ? (
                    <img
                      src={icons[item.icon]}
                      alt={`${item.title} icon`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : item.icon === 'work' ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className={`w-full lg:w-[45%] ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-indigo-600 font-medium">{item.company}</p>
                    {item.description.map((line, idx) => (
                      <p key={idx} className="text-gray-600 mt-2">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
