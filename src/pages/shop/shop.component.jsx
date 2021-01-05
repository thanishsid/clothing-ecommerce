import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animation/animations';

const ShopPage = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants.fadeIn}
      transition={pageTransition.opt1}
      className='shop-page'
    >
      <CollectionsOverview />
    </motion.div>
  );
};

export default ShopPage;
