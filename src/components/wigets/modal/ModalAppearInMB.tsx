import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { classNames } from "../../../utils/tailwind-utils";
import SimplePortal from "../SimplePortal";

interface ModalAppearInMBProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  setOverflow?: string;
}

const ModalAppearInMB: React.FC<ModalAppearInMBProps> = ({
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
    <>
      <SimplePortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={classNames(
                "fixed left-0 top-0 z-[9999] flex h-screen w-screen items-start justify-center overflow-y-auto backdrop-blur-sm",
                setOverflow ? setOverflow : "overflow-hidden",
              )}
              onClick={onClose}
            >
              <div className="w-full" onClick={(e) => e.stopPropagation}>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SimplePortal>
    </>
  );
};

export default ModalAppearInMB;
