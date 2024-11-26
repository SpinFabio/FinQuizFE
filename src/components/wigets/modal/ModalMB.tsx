import { motion, AnimatePresence } from "framer-motion";
import { classNames } from "../../../utils/tailwind-utils";
import { useEffect } from "react";

interface ModalMBProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  setOverflow?: string;
}

const ModalMB: React.FC<ModalMBProps> = ({
  isOpen,
  onClose,
  children,
  setOverflow,
}) => {
  useEffect(() => {
    // serve per evitare che la pagina dietro scorra quando siamo nel modal
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classNames(
            "fixed left-0 top-0 z-[100] flex h-screen w-screen items-start justify-center overflow-y-auto px-7 backdrop-blur",
            setOverflow ? setOverflow : "overflow-hidden",
          )}
          onClick={onClose}
        >
          <motion.div
            className={classNames(
              "h-full w-full flex-col items-center justify-center"
            )}
            initial={{ scale: 0.9, opacity: 0, y: 1000 }}
            animate={{ scale: 1, opacity: 1, y: 1 }}
            exit={{ scale: 0, opacity: 0, y: 1000 }}
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
