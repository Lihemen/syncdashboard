import React from 'react';
import { motion } from 'framer-motion';

const OpacityContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className='mt-12'>
      {children}
    </motion.div>
  );
};

export default OpacityContainer;

