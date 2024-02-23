"use client";
import { motion } from "framer-motion";

// this is a workaround around the next js server side components
const MotionDiv = motion.div;
const MotionP = motion.p;

export { MotionDiv, MotionP };
