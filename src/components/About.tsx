import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/supratip.jpg"
              alt="Piyush Agarwal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Hello! I’m Supratip Bhattacharya, a Software Development Engineer with a passion for building high-performance, user-centric web applications. With extensive experience in frontend development, I’m proficient in React.js, 
            TypeScript, Redux, and Next.js, and I have a keen eye for creating seamless, accessible user experiences.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Throughout my career, I've driven impactful results such as cutting task completion times by 90% and boosting user engagement by 40%. My commitment to continuous improvement includes automating CI/CD pipelines to streamline development and deploying best practices for optimal performance.

Beyond my professional work, I enjoy contributing to open-source projects, developing educational tools, and embracing new challenges to enhance my skills and make a positive impact.

Let’s connect and create something amazing together!
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">4+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2K+</h3>
                <p className="text-gray-600">Linkedln Followers</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
