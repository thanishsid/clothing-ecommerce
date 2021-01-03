import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animation/animations';

const ShopPage = () => {
  const collections = useSelector(selectShopCollections);

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
