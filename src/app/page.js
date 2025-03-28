'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Emojis des chats roux et des fleurs
const cats = ['🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱', '🐱'];
const flowers = ['🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸', '🌸'];

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [response, setResponse] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });
      setIsMobile(width < 768);
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const handleYes = () => {
    setResponse('yes');
    setShowMessage(true);
  };

  const handleNo = () => {
    setResponse('no');
    setShowMessage(true);
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-400 to-red-400 p-4 font-sans overflow-hidden relative">
      {/* Effet de cascade de chats */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {cats.map((cat, index) => {
          // Générer des positions X aléatoires pour le début et la fin
          const startX = Math.random() * windowSize.width;
          const endX = Math.random() * windowSize.width;
          
          return (
            <motion.div
              key={`cat-${index}`}
              initial={{ y: -50, x: startX, opacity: 0 }}
              animate={{
                y: windowSize.height,
                x: [startX, endX],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "linear",
              }}
              className="absolute text-4xl md:text-6xl"
            >
              {cat}
            </motion.div>
          );
        })}
      </div>

      {/* Effet de cascade de fleurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {flowers.map((flower, index) => {
          // Générer des positions X aléatoires pour le début et la fin
          const startX = Math.random() * windowSize.width;
          const endX = Math.random() * windowSize.width;
          
          return (
            <motion.div
              key={`flower-${index}`}
              initial={{ y: -50, x: startX, opacity: 0 }}
              animate={{
                y: windowSize.height,
                x: [startX, endX],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "linear",
              }}
              className="absolute text-3xl md:text-5xl"
            >
              {flower}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 p-4 md:p-8 rounded-2xl shadow-xl text-center w-full max-w-lg relative z-10 backdrop-blur-sm mx-4"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-red-500 mb-4 md:mb-6"
        >
          Iliana..
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed"
        >
          Tu veux aller en date avec moi demain après-midi ?
        </motion.p>
        
        <AnimatePresence>
          {!showMessage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-4 justify-center mt-4 md:mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-6 md:px-8 py-3 md:py-4 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition-colors w-full md:w-auto"
              >
                Ouiiiiii !!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNo}
                className="px-6 md:px-8 py-3 md:py-4 bg-gray-100 text-gray-600 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                Non, désolée tu pues la merde
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 md:mt-8"
            >
              {response === 'yes' ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="p-4 md:p-6 bg-pink-50 rounded-xl"
                >
                  <motion.h2
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    className="text-2xl md:text-3xl font-bold text-red-500 mb-3 md:mb-4"
                  >
                    💝💝
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-700 mb-2"
                  >
                    INCROYABLEEE !!!!
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="p-4 md:p-6 bg-gray-50 rounded-xl"
                >
                  <motion.h2
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    className="text-2xl md:text-3xl font-bold text-gray-600 mb-3 md:mb-4"
                  >
                    Bon bah je vais mourir (non)
                  </motion.h2>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
