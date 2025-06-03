
import { categories } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">تصفح حسب الفئة</h2>
          <p className="text-muted-foreground">اكتشف مجموعتنا الواسعة من المنتجات</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90 flex items-center gap-1">
                      {category.productCount} منتج
                      <ArrowLeft className="h-3 w-3" />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
