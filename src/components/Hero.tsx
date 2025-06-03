
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                اكتشف أحدث
                <span className="text-gradient block">المنتجات</span>
                بأفضل الأسعار
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                تسوق من مجموعة واسعة من المنتجات عالية الجودة مع توصيل سريع وخدمة عملاء متميزة على مدار الساعة
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-purple text-white hover:opacity-90 transition-opacity">
                تسوق الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                تصفح الفئات
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">منتج متاح</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">دعم فني</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 gradient-purple-light rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative bg-card rounded-3xl p-8 border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="تسوق إلكتروني"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Floating Product Cards */}
              <div className="absolute -top-4 -right-4 bg-card border rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">هواتف ذكية</div>
                    <div className="text-xs text-muted-foreground">أحدث الموديلات</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-xl">✨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">توصيل مجاني</div>
                    <div className="text-xs text-muted-foreground">للطلبات فوق 100 د.ل</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
