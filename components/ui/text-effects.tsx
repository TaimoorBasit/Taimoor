"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // Split words into characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, setScope] = useState(0);

    useEffect(() => {
        // animate logic could go here, but using pure layout logic for simplicity
    }, []);

    const renderWords = () => {
        return (
            <div className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block mr-2 last:mr-0">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`text-white`, word.className)}
                                >
                                    {char}
                                </span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {renderWords()}
                </div>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const RotatingText = ({
    texts,
    className,
}: {
    texts: string[];
    className?: string;
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Rotate every 3 seconds
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className={cn("relative inline-block overflow-hidden h-[1.2em] w-full align-bottom", className)}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-electric-coral to-cyan-mist"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};
