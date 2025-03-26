import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { timelineData } from "../data/timeline";

const icons = {
  work: "/work-icon.png",
  education: "/education-icon.png",
  newscorp: "/newscorp.png",
  tcs: "/tcs.jpg",
  fiem: "/fiem.jpg",
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-300 to-gray-200 hidden lg:block" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Section */}
                <div
                  className={`relative flex justify-center items-center w-16 h-16 ml-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg lg:absolute lg:top-0 lg:left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0
                      ? "lg:left-[calc(50% + 1rem)]"
                      : "lg:left-[calc(50% - 1rem)]"
                  } ${index % 2 === 0 ? "ml-2" : ""}`} // Added ml-2 for mobile shift
                >
                  {icons[item.icon] ? (
                    <img
                      src={icons[item.icon]}
                      alt={`${item.title} icon`}
                      className="w-10 h-10 object-cover"
                    />
                  ) : item.icon === "work" ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Content Section */}
                <div
                  className={`w-full lg:w-[45%] ${
                    index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`bg-white p-6 rounded-xl shadow-xl transform transition ${
                      index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    {/* Year */}
                    <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                      {item.year}
                    </span>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {/* Company */}
                    <p className="text-lg text-purple-500 font-medium">
                      {item.company}
                    </p>
                    {/* Description */}
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