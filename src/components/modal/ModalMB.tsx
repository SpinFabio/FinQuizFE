import { motion, AnimatePresence } from "framer-motion";
import { classNames } from "../../utils/tailwind-utils";

interface ModalMBProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMB: React.FC<ModalMBProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classNames(
            "fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center backdrop-blur-md"
          )}
          onClick={onClose}
        >
          <motion.div
            className="z-[101] rounded-md p-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMB;
