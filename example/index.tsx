import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductTitle, ProductButtons, ProductImage, ProductCard } from '../.';

const product1 = {
  id: crypto.randomUUID(),
  title: 'Cofee Mug - Card',
  // img: '/coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={product1}
      initialValues={{
        count: 4,
        // maxCount: 10,
      }}
    >
      {({ reset, increaseBy, count, isMaxCountReached }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
