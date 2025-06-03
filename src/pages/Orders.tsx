
import { useState } from 'react';
import { Package, Truck, CheckCircle, XCircle, Eye } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Mock order data
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 299,
    items: [
      { name: 'لابتوب جيمنج عالي الأداء', price: 1299, quantity: 1, image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&q=80' }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 128,
    items: [
      { name: 'قميص قطني كلاسيكي', price: 49, quantity: 2, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=100&q=80' },
      { name: 'فستان صيفي أنيق', price: 89, quantity: 1, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=100&q=80' }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    total: 914,
    items: [
      { name: 'طقم أريكة مودرن', price: 899, quantity: 1, image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=100&q=80' }
    ]
  }
];

const statusConfig = {
  processing: { label: 'قيد المعالجة', color: 'bg-yellow-500', icon: Package },
  shipped: { label: 'تم الشحن', color: 'bg-blue-500', icon: Truck },
  delivered: { label: 'تم التوصيل', color: 'bg-green-500', icon: CheckCircle },
  cancelled: { label: 'ملغي', color: 'bg-red-500', icon: XCircle }
};

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">طلباتي</h1>
          <p className="text-muted-foreground">تتبع حالة طلباتك وسجل المشتريات</p>
        </div>

        {mockOrders.length > 0 ? (
          <div className="space-y-4">
            {mockOrders.map((order) => {
              const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon;
              
              return (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">طلب رقم {order.id}</h3>
                          <Badge className={`${statusConfig[order.status as keyof typeof statusConfig].color} text-white`}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {statusConfig[order.status as keyof typeof statusConfig].label}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          تاريخ الطلب: {new Date(order.date).toLocaleDateString('ar-LY')}
                        </p>
                        
                        <p className="text-sm">
                          المجموع: <span className="font-semibold">{order.total} د.ل</span>
                        </p>
                        
                        <p className="text-sm text-muted-foreground">
                          {order.items.length} منتج
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                              <Eye className="h-4 w-4 mr-2" />
                              عرض التفاصيل
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>تفاصيل الطلب {order.id}</DialogTitle>
                            </DialogHeader>
                            
                            {selectedOrder && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium">رقم الطلب:</span>
                                    <p className="text-muted-foreground">{selectedOrder.id}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium">التاريخ:</span>
                                    <p className="text-muted-foreground">
                                      {new Date(selectedOrder.date).toLocaleDateString('ar-LY')}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-medium">الحالة:</span>
                                    <Badge className={`${statusConfig[selectedOrder.status as keyof typeof statusConfig].color} text-white mt-1`}>
                                      {statusConfig[selectedOrder.status as keyof typeof statusConfig].label}
                                    </Badge>
                                  </div>
                                  <div>
                                    <span className="font-medium">المجموع:</span>
                                    <p className="text-muted-foreground">{selectedOrder.total} د.ل</p>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium mb-4">المنتجات</h4>
                                  <div className="space-y-3">
                                    {selectedOrder.items.map((item: any, index: number) => (
                                      <div key={index} className="flex gap-3 p-3 border rounded-lg">
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                          <h5 className="font-medium">{item.name}</h5>
                                          <p className="text-sm text-muted-foreground">
                                            الكمية: {item.quantity} × {item.price} د.ل
                                          </p>
                                          <p className="text-sm font-medium">
                                            {item.price * item.quantity} د.ل
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        {order.status === 'delivered' && (
                          <Button size="sm" variant="outline">
                            إعادة الطلب
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">لا توجد طلبات سابقة</h3>
              <p className="text-muted-foreground mb-6">
                لم تقم بعمل أي طلبات بعد. ابدأ التسوق الآن!
              </p>
              <Button onClick={() => window.location.href = '/products'}>
                تصفح المنتجات
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
