import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "./Button";

export const Drawer = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          key="overlay"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          exit="hidden"
          transition={{ duration: 0.3 }}
          className="fixed inset-0"
          style={{ background: "hsla(0, 0%, 0%, 0.8)" }}
        />
        {/* drawer */}
        <motion.div
          key="drawer"
          initial={{ opacity: 0, translateX: "100%" }}
          animate={
            isOpen
              ? { opacity: 1, translateX: "0%" }
              : { opacity: 0, translateX: "100%" }
          }
          exit={{ opacity: 0, translateX: "100%" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="fixed inset-0 bg-white"
          style={{ left: "2rem" }}
        >
          <div className="p-4">
            {/* close button */}
            <div className="flex">
              <button onClick={onClose} className="ml-auto">
                <CloseIcon />
              </button>
            </div>
            <nav className="items-center gap-2 text-base flex flex-col pt-20 font-medium">
              <Link href="/blog">
                <a className="p-4 w-full text-center">Blog</a>
              </Link>
              <Link href="/uses">
                <a className="p-4 w-full text-center">Uses</a>
              </Link>
              <Link href="mailto:alexander.spieslechner@gmail.com" passHref>
                <a>
                  <Button className="mt-6">Contact Me</Button>
                </a>
              </Link>
            </nav>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);