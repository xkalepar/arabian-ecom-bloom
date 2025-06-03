
import { getFeaturedProducts } from '@/lib/data';
import { ProductCard } from './ProductCard';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">المنتجات المميزة</h2>
          <p className="text-muted-foreground">اكتشف أفضل منتجاتنا المختارة بعناية</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
