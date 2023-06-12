
import { motion } from "framer-motion";



const BgCircle = () => {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity :[0.1,0.2,0.4,0.8,0.1,0.2],
        borderRadius: ["20%","20%","50%", "80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className="relative flex justify-center items-center"
    >
      <div
        className=" absolute border border-yellow-600 rounded-full
         h-[200px] w-[200px] mt-52 animate-ping dark:border-[#E76500] "
      />
      <div
        className="border border-yellow-600  rounded-full
         h-[300px] w-[300px] animate-ping mt-52  absolute dark:border-[#E76500]"
      />
      <div
        className="border border-yellow-600  rounded-full
         h-[400px] w-[400px] animate-ping mt-52  absolute dark:border-[#E76500]"
      />
      <div
        className="border  border-yellow-600 rounded-full
         h-[500px] w-[500px] animate-ping mt-52 opacity-10 animate-pulse absolute "
      />
      <div
        className="border border-yellow-600 rounded-full
         md:h-[650px] md:w-[650px] mt-52 opacity-20 animate-pulse  absolute "
      />
      <div
        className="border border-[#E76500] dark:border-[#E76500] rounded-full
         md:h-[800px] md:w-[800px]  h-[680px] z-50 w-[380px] mt-52  absolute"
      />
    </motion.div>
  );
};

export default BgCircle;
