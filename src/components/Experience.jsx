import { EXPERIENCES } from "../constants";
import * as motion from "motion/react-client"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
             whileInView={{opacity: 1, y: 0}} 
             initial={{opacity: 0, y: -100}} 
             transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Experience</motion.h2>
            {/* <div className="mx-auto max-w-4xl"> */}
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}} 
                    initial={{opacity: 0, x: -100}} 
                    transition={{duration: 1}} 
                    className="flex-shrink-0 lg:w-1/5 flex flex-col items-center">
                        <p className="mb-2 mt-1 text-sm text-neutral-400">{experience.year}</p>
                        {experience.logo && (
                            <img
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                className="mt-20  object-contain hidden lg:block"
                                // className="w-full h-auto sm:w-1/5 md:w-1/4 lg:w-1/3 xl:w-1/2 object-cover"
                            />
                        )}
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}} 
                    initial={{opacity: 0, x: 100}} 
                    transition={{duration: 1}} 
                    className="w-full max-w-xl lg:w-3/4">
                        {/* Company Name */}
                        <p className="font-bold text-lg text-purple-100">{experience.company}</p>
                        {/* Role */}
                        <p className="italic text-neußtral-300 mb-4">{experience.role}</p>

                        {/* If experience has multiple projects, display them as separate items with bullet points */}
                        {experience.projects ? (
                            <div className="mb-4 text-neutral-400">
                                {experience.projects.map((project, projectIndex) => (
                                    <div key={projectIndex} className="mb-4">
                                        <p className="font-semibold">{project.title}</p>
                                        <ul className="list-disc ml-5">
                                            {project.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : experience.project ? (
                            // If experience has a single project with multiple bullet points
                            <div className="mb-4 text-neutral-400">
                                <p className="font-semibold">{experience.project.title}</p>
                                <ul className="list-disc ml-5">
                                    {experience.project.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            // Fallback for experiences that only have a single description
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                        )}

                        {/* Technologies Used */}
                        <div className="mt-4">
                            {experience.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
        // </div>
    );
};

export default Experience;

