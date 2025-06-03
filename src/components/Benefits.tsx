
import { Truck, Shield, HeadphonesIcon, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'توصيل مجاني للطلبات فوق 100 د.ل',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'ضمان الجودة',
    description: 'منتجات أصلية بضمان شامل',
    color: 'text-green-600'
  },
  {
    icon: HeadphonesIcon,
    title: 'دعم 24/7',
    description: 'خدمة عملاء على مدار الساعة',
    color: 'text-purple-600'
  },
  {
    icon: CreditCard,
    title: 'دفع آمن',
    description: 'طرق دفع متعددة وآمنة',
    color: 'text-orange-600'
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
