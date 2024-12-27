"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  },
  tap: {
    scale: 0.95,
  },
};
export default function HowToUse() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          How to Use Pitch Hub in 5 Easy Steps
        </h2>
        <div className="space-y-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-12 bg-[#2346a0] rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-2">Step 1: Sign Up</h3>
            <p className="leading-relaxed mb-2">
              Create an account by providing your email and setting a password.
              Once you’ve signed up, you’ll receive a confirmation email to
              verify your account.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-8 bg-[#2346a0] rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">
              Step 2: Customize Your Profile
            </h3>
            <p className="leading-relaxed">
              Add your personal and professional details to build a
              comprehensive profile. Upload a profile picture and fill in the
              required information.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-8 bg-[#2346a0] rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Step 3: Create a Pitch</h3>
            <p className="leading-relaxed">
              Use our intuitive pitch builder to create your first pitch.
              Include all necessary information such as your pitch goal, key
              points, and any supporting materials.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-8 bg-[#2346a0] rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">
              Step 4: Practice and Perfect
            </h3>
            <p className="leading-relaxed">
              Use our practice tools to rehearse your pitch. Get feedback from
              peers or AI-driven analysis to fine-tune your presentation.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="p-8 bg-[#2346a0] rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">
              Step 5: Pitch with Confidence{" "}
            </h3>
            <p className="leading-relaxed">
              Once you’re ready, deliver your pitch with confidence. You can
              pitch live, record your pitch, or share it with potential
              investors and stakeholders directly through the app.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
