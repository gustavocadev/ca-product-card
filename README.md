### ca-Product-Card

Este es un paquete de pruebas de despliege en NPM

### gustavocadev

```javascript
import { ProductCard, ProductTitle, ProductButtons } from 'ca-product-card'
```

```javascript
<ProductCard
  key={product.id}
  product={product}
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
```