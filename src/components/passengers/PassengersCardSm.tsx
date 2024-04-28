
import { motion } from "framer-motion";
interface PassengerCardProps {
  name: string;
  position: string;
  twitterUrl?: string;
  telegramUrl?: string;
}

const PassengerCardSm: React.FC<PassengerCardProps> = ({
  name,
}) => {
  const flipInVariants = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={flipInVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="">
        <div className={`bg-gradient-card h-[70px] ${ name === "CrytptoSausage"?'w-[140px]': 'w-[120px]' } sm:h-[90px] sm:w-[150px] p-[2px]`}>
          <div className=" bg-[#8F8270]  w-full h-full  flex flex-col items-center justify-center">
            <h3 className={`font-d-din-bold uppercase text-center ${(name==="CrytptoSausage" || name==="OnTheMoonX") ? 'text-[17px] sm:text-[20px]' : 'text-[22px] sm:text-[27px]'}  text-black overflow-hidden`}>
              {name}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PassengerCardSm;
