import * as motion from "motion/react-client"
import { VscAzure } from "react-icons/vsc";
import { TbBrandPython } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: { y: -10 }, 
    animate:{
        y: [10, -10], 
        transition:{
            duration: duration, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse",
        }
    },
    });

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{ opacity: 1, x: 0 }} 
        initial= {{opacity: 0, x: -100}}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }} 
        initial= {{opacity: 0, x: -100}}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"> 
            <motion.div 
            variants={iconVariants (1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <VscAzure className="text-7xl text-[#0078D4]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-[#FF9900]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaSalesforce className="text-7xl text-[#00A1E0]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (2.2)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandPython className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants (2.4)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-[#ED8B00]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-[#8CC84B]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (1.3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-[#61DAFB]" />
            </motion.div>
            <motion.div 
            variants={iconVariants (4.2)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-[#2496ED]" />
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;