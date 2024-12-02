import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { classNames } from "../../../utils/tailwind-utils";
import SimplePortal from "../portals/SimplePortal";

interface ModalMBProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  setOverflow?: string;
  type?: "popIn" | "appearIn"; // Specifica i tipi di modal
}

const ModalMB: React.FC<ModalMBProps> = ({
  isOpen,
  onClose,
  children,
  setOverflow,
  type = "appearIn",
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

  const motionSettings =
    type === "popIn"
      ? {
          initial: { scale: 0.9, opacity: 0, y: 100 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0, opacity: 0, y: 500 },
        }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
        };

  return (
    <SimplePortal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "fixed left-0 top-0 z-[9999] flex h-screen w-screen items-start justify-center overflow-y-auto backdrop-blur-sm sm:hidden",
              setOverflow ? setOverflow : "overflow-hidden",
            )}
            onClick={onClose}
          >
            <motion.div
              className={classNames(
                type === "popIn"
                  ? "h-full w-full flex-col items-center justify-center"
                  : "w-full",
              )}
              {...motionSettings}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SimplePortal>
  );
};

export default ModalMB;
