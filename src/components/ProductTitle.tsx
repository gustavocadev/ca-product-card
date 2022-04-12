import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export type Props = {
  className?: string;
  title?: string;
  style?: CSSProperties;
};

const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  );
};

export default ProductTitle;
