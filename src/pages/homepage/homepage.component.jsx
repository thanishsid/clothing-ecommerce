import React from 'react';
import Directory from '../../components/directory/directory.component';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animation/animations';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants.fadeIn}
      transition={pageTransition.opt1}
      className='homepage'
    >
      <Directory />
    </motion.div>
  );
};
export default HomePage;
