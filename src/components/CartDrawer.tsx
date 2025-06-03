
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={closeCart}>
        <SheetContent side="left" className="w-full sm:w-96">
          <SheetHeader>
            <SheetTitle className="text-right">سلة التسوق</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">سلة التسوق فارغة</h3>
            <p className="text-muted-foreground mb-6">لم تقم بإضافة أي منتجات بعد</p>
            <Button onClick={() => { closeCart(); navigate('/products'); }}>
              تصفح المنتجات
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="left" className="w-full sm:w-96 flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-right">سلة التسوق ({items.length} منتج)</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className="flex gap-3 border-b pb-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.selectedColor && <span>اللون: {item.selectedColor}</span>}
                    {item.selectedColor && item.selectedSize && <span> | </span>}
                    {item.selectedSize && <span>المقاس: {item.selectedSize}</span>}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="text-left">
                      <div className="font-medium text-sm">{item.product.price * item.quantity} د.ل</div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-auto p-0 text-xs text-red-500 hover:text-red-700"
                        onClick={() => removeItem(item.product.id)}
                      >
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>المجموع الكلي</span>
            <span>{getTotalPrice()} د.ل</span>
          </div>
          
          <div className="space-y-2">
            <Button 
              className="w-full gradient-purple text-white hover:opacity-90"
              onClick={handleCheckout}
            >
              إتمام الطلب
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => { closeCart(); navigate('/products'); }}
            >
              متابعة التسوق
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
