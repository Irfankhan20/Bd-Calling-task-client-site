import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import MailBox from "./MailBox";

const Contacts = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: 1.2 });
  }, [controls]);

  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="mb-16"
        src="https://i.ibb.co/XYgJ3ZN/Contact-With.png"
        alt=""
      />
      {/* support card section  */}
      <h2 className="text-3xl  font-medium text-center pb-10">
        Support Session
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {/* card 1 */}
        <motion.div
          animate={controls}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FFFFFF] rounded-xl shadow-xl "
        >
          <div className="bg-[#FFFFFF] p-10 rounded-xl shadow-xl">
            <h2 className="font-bold underline">Sales</h2>
            <p className="my-6">
              Whether you're new to GREEMIND or a current customer, get in touch
              with our sales team to discuss how we can work together.
            </p>
            <button className="px-4 py-2 text-[#0af1f1] bg-white font-bold shadow-xl">
              Contact Sales
            </button>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          animate={controls}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FFFFFF] rounded-xl shadow-xl "
        >
          <div className="bg-[#FFFFFF] p-10 rounded-xl shadow-xl">
            <h2 className="font-bold underline">Support</h2>
            <p className="my-6">
              Access resources to help our customers learn how to better utilize
              sprout, find answers to tech questions and request assistance.
            </p>
            <button className="px-4 py-2 text-[#0af1f1] bg-white font-bold shadow-xl">
              Create a Ticket
            </button>
          </div>
        </motion.div>

        {/* card 3 */}
        <motion.div
          animate={controls}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3 }}
          className="bg-[#FFFFFF] rounded-xl shadow-xl "
        >
          <div className="bg-[#FFFFFF] p-10 rounded-xl shadow-xl">
            <h2 className="font-bold underline">Partners</h2>
            <p className="my-6">
              Join our mission to show the world that social is more than a
              marketing channel by referring your network to GREEMIND.
            </p>
            <button className="px-4 py-2 text-[#0af1f1] bg-white font-bold shadow-xl">
              GREEMIND partner Program
            </button>
          </div>
        </motion.div>
      </div>

      {/* poster section  */}
      <div className="mb-20">
        <MailBox></MailBox>
      </div>
    </div>
  );
};

export default Contacts;
