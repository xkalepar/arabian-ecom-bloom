
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Share2, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products, Product } from '@/lib/data';
import { useCart } from '@/hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const relatedProducts = products.filter(p => 
    p.id !== product?.id && p.category === product?.category
  ).slice(0, 4);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0] || '');
        setSelectedSize(foundProduct.sizes[0] || '');
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">المنتج غير موجود</h2>
            <Button onClick={() => navigate('/products')}>
              العودة للمنتجات
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    navigate('/checkout');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate('/')} className="hover:text-primary">الرئيسية</button>
          <ArrowRight className="h-4 w-4" />
          <button onClick={() => navigate('/products')} className="hover:text-primary">المنتجات</button>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              {product.images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600">جديد</Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="bg-orange-500 hover:bg-orange-600">الأكثر مبيعاً</Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge variant="destructive">-{discountPercentage}%</Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      index === currentImageIndex ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button size="icon" variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{product.category}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} تقييم)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">{product.price} د.ل</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} د.ل
                  </span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">اللون</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? 'default' : 'outline'}
                      onClick={() => setSelectedColor(color)}
                      className="min-w-[80px]"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">المقاس</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[60px]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">الكمية</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  المتوفر في المخزون: {product.inStock ? 'متوفر' : 'غير متوفر'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full gradient-purple text-white hover:opacity-90"
                size="lg"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                اشتر الآن
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                أضف للسلة
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">الوصف والمميزات</TabsTrigger>
            <TabsTrigger value="reviews">التقييمات</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">الوصف</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              {product.features.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">المميزات</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="text-center py-8">
                <h3 className="font-semibold mb-2">التقييمات</h3>
                <p className="text-muted-foreground">
                  متوسط التقييم: {product.rating}/5 من {product.reviews} تقييم
                </p>
              </div>
              
              {/* Mock Reviews */}
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold">أحمد محمد</span>
                  </div>
                  <p className="text-muted-foreground">منتج ممتاز وجودة عالية، أنصح بالشراء</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <span className="font-semibold">فاطمة علي</span>
                  </div>
                  <p className="text-muted-foreground">جيد جداً ولكن التوصيل كان متأخر قليلاً</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">منتجات ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
