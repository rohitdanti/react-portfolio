import * as motion from "motion/react-client";
import { RECOMMENDATIONS } from "../constants/index.js";
import { FaLinkedin } from "react-icons/fa";

const container = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Recommendation = () => {
  return (
    <section className="py-16 px-6 bg-transparent border-t border-neutral-800">
      <motion.h2
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="my-20 text-center text-4xl"
      >
        Recommendations
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECOMMENDATIONS.map((rec, index) => (
          <motion.div
            key={index}
            variants={container(0.1 + index * 0.2)}
            initial="hidden"
            animate="visible"
            className="rounded-xl bg-white/5 border border-white/10 p-6 shadow-md transition hover:shadow-lg flex flex-col justify-between"
          >
            <p className="text-sm text-neutral-300 mb-4 italic">"{rec.text}"</p>
            <div className="mt-auto">
              <p className="text-white font-semibold">{rec.name}</p>
              <p className="text-purple-300 text-sm">{rec.role}</p>
              {rec.linkedin && (
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white-300 font-bold hover:underline mt-1"
                >
                  <FaLinkedin className="text-base text-[#0077B5] font-bold" />View LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Recommendation;