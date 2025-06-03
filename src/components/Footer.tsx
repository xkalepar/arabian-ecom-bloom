
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">إ</span>
              </div>
              <span className="text-xl font-bold text-gradient">متجر إبتكار</span>
            </div>
            <p className="text-muted-foreground text-sm">
              متجرك الإلكتروني المفضل للحصول على أفضل المنتجات بأسعار منافسة وخدمة متميزة
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">عن المتجر</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">خدمة العملاء</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">تتبع الطلب</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الإرجاع والاستبدال</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">طرق الدفع</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">التوصيل والشحن</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الضمان</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+218928666458</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@ebtkar.tech</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>طرابلس، ليبيا</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm">اشترك في النشرة الإخبارية</h4>
              <div className="flex gap-2">
                <Input placeholder="البريد الإلكتروني" className="text-sm" />
                <Button size="sm" className="gradient-purple text-white hover:opacity-90">
                  اشترك
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 متجر إبتكار. جميع الحقوق محفوظة. |{' '}
            <a 
              href="https://ebtkar.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Built by Ebtkar Tqni (ebtkar.tech)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
