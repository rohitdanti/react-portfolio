import * as motion from "motion/react-client";
import { PROJECTS } from "../constants/index.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const container = (delay) => ({
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Projects = () => {
  return (
    <section className="py-12 lg:py-20 px-6 bg-transparent border-t border-neutral-800">
      <motion.h2
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={container(0.1 + index * 0.15)}
            initial="hidden"
            animate="visible"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 max-w-sm w-full flex flex-col justify-between transition-all hover:border-purple-400"
            style={{ minHeight: "350px" }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-300 mb-4">{project.description}</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#5f6fcf]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Optional Buttons */}
              <div className="flex gap-3 pt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold gap-1 text-sm text-white-800 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold gap-1 text-sm text-white-800 hover:underline"
                  >
                    <FaExternalLinkAlt /> View Paper
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;