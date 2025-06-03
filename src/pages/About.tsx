
import { Mail, Phone, MapPin, Users, Award, Truck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">عن متجر إبتكار</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نحن نفخر بتقديم أفضل المنتجات بأسعار منافسة وخدمة عملاء متميزة. متجرك الإلكتروني المفضل للحصول على كل ما تحتاجه
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                بدأت رحلتنا في عام 2024 برؤية واضحة: تقديم تجربة تسوق إلكترونية استثنائية للعملاء في ليبيا والمنطقة العربية. نؤمن بأن التجارة الإلكترونية يجب أن تكون سهلة ومريحة وموثوقة.
              </p>
              <p>
                نحن نعمل باستمرار على توسيع مجموعة منتجاتنا وتحسين خدماتنا لنلبي احتياجات عملائنا المتنوعة. من الإلكترونيات إلى الملابس ومنتجات المنزل، نحن هنا لنقدم لك كل ما تحتاجه.
              </p>
              <p>
                فريقنا المتخصص يعمل على مدار الساعة لضمان حصولك على أفضل تجربة تسوق ممكنة، مع الحرص على الجودة والسرعة في التوصيل.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80"
              alt="فريق العمل"
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">منتج</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">دعم فني</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">قيمنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">الجودة</h3>
                <p className="text-muted-foreground">
                  نختار منتجاتنا بعناية فائقة لضمان حصولك على أفضل جودة ممكنة
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">خدمة العملاء</h3>
                <p className="text-muted-foreground">
                  فريق دعم متخصص ومتاح دائماً لمساعدتك وحل أي استفسارات
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">التوصيل السريع</h3>
                <p className="text-muted-foreground">
                  نضمن وصول طلبك في أسرع وقت ممكن وبأفضل حالة
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
          <p className="text-muted-foreground mb-8">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+218928666458</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@ebtkar.tech</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>طرابلس، ليبيا</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
