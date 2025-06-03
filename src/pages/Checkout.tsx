
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Phone, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/hooks/useCart';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cod',
    agreeToTerms: false
  });

  const shippingCost = 15;
  const total = getTotalPrice() + shippingCost;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('يجب الموافقة على الشروط والأحكام');
      return;
    }

    // Simulate order processing
    alert('تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h2>
            <p className="text-muted-foreground mb-6">لا يمكنك إتمام الطلب بسلة فارغة</p>
            <Button onClick={() => navigate('/products')}>
              تصفح المنتجات
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">إتمام الطلب</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    المعلومات الشخصية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">الاسم الأخير *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
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
                  
                  <div>
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    عنوان التوصيل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">العنوان بالتفصيل *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="رقم البناية، اسم الشارع، الحي"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">المدينة *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    طريقة الدفع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                        <Truck className="h-4 w-4" />
                        الدفع عند الاستلام
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse opacity-50">
                      <RadioGroupItem value="card" id="card" disabled />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-not-allowed">
                        <CreditCard className="h-4 w-4" />
                        بطاقة ائتمانية (قريباً)
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      أوافق على{' '}
                      <button type="button" className="text-primary hover:underline">
                        الشروط والأحكام
                      </button>
                      {' '}و{' '}
                      <button type="button" className="text-primary hover:underline">
                        سياسة الخصوصية
                      </button>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>ملخص الطلب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Products */}
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div key={`${item.product.id}-${index}`} className="flex gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-1">{item.product.name}</h4>
                          <div className="text-xs text-muted-foreground">
                            الكمية: {item.quantity}
                            {item.selectedColor && ` | اللون: ${item.selectedColor}`}
                            {item.selectedSize && ` | المقاس: ${item.selectedSize}`}
                          </div>
                          <div className="text-sm font-medium">
                            {item.product.price * item.quantity} د.ل
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>المجموع الفرعي</span>
                      <span>{getTotalPrice()} د.ل</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>رسوم التوصيل</span>
                      <span>{shippingCost} د.ل</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                      <span>المجموع الكلي</span>
                      <span>{total} د.ل</span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-purple text-white hover:opacity-90"
                    disabled={!formData.agreeToTerms}
                  >
                    تأكيد الطلب
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
}
