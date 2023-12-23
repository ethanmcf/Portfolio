import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 z-50 width-screen h-screen z-30 bg-darkGrey"
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "100%" }}
        exit={{ x: ["100%", "0%"], width: ["100%", "0%"] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0  width-screen h-screen z-40 bg-blue"
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "100%" }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 width-screen h-screen z-30 bg-backgroundEnd"
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "100%" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
