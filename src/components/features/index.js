"use client";
import { motion } from "framer-motion";
import { FaChartBar, FaHandshake, FaLightbulb } from "react-icons/fa";

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  },
  tap: {
    scale: 0.95,
  },
};

const experience = [
  {
    icon: <FaLightbulb className="text-5xl mx-auto mb-4 text-blue-500" />,
    header: "Create Pitch Decks",
    desc: "Design professional pitch decks with our easy-to-use tools.",
  },
  {
    icon: <FaHandshake className="text-5xl mx-auto mb-4 text-blue-500" />,
    header: "Connect with Investors",
    desc: "Reach a network of potential investors and secure funding.",
  },
  {
    icon: <FaChartBar className="text-5xl mx-auto mb-4 text-blue-500" />,
    header: "Track Progress",
    desc: "Monitor your pitch performance and get insightful analytics.",
  },
];
const FeaturesSection = () => {
  return (
    <section className="w-full py-20 px-15">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-6 dark:bg-[#030712] bg-wh rounded-lg shadow-md"
          >
            <FaLightbulb className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Create Pitch Decks</h3>
            <p>Design professional pitch decks with our easy-to-use tools.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-6 bg-[#030712] rounded-lg shadow-md"
          >
            <FaHandshake className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Connect with Investors</h3>
            <p>Reach a network of potential investors and secure funding.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-6 bg-[#030712] rounded-lg shadow-md"
          >
            <FaChartBar className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p>Monitor your pitch performance and get insightful analytics.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
