import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animation/animations';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants.fadeIn}
      transition={pageTransition.opt1}
      className='shop-page'
    >
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </motion.div>
  );
};

export default ShopPage;
