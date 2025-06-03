
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-muted-foreground">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">الموضوع *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">الرسالة *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-purple text-white hover:opacity-90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">الهاتف</h4>
                    <p className="text-muted-foreground">+218928666458</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">contact@ebtkar.tech</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">العنوان</h4>
                    <p className="text-muted-foreground">طرابلس، ليبيا</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">ساعات العمل</h4>
                    <p className="text-muted-foreground">
                      السبت - الخميس: 9:00 - 18:00<br />
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الموقع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  خريطة الموقع ستكون متاحة قريباً
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">كم يستغرق التوصيل؟</h3>
                <p className="text-muted-foreground text-sm">
                  عادة ما يستغرق التوصيل من 2-5 أيام عمل حسب موقعك
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">هل يمكنني إرجاع المنتج؟</h3>
                <p className="text-muted-foreground text-sm">
                  نعم، يمكنك إرجاع المنتج خلال 14 يوم من تاريخ الاستلام
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">هل التوصيل مجاني؟</h3>
                <p className="text-muted-foreground text-sm">
                  التوصيل مجاني للطلبات التي تزيد عن 100 دينار ليبي
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">كيف يمكنني تتبع طلبي؟</h3>
                <p className="text-muted-foreground text-sm">
                  سنرسل لك رقم التتبع عبر البريد الإلكتروني بعد الشحن
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
