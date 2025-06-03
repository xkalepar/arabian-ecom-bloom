
import { useState } from 'react';
import { Product } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const isMobile = useIsMobile();

  const handleAddToCart = () => {
    if (isMobile && (product.colors.length > 0 || product.sizes.length > 0)) {
      // On mobile, open selection drawer for products with variants
      console.log('Opening selection drawer for:', product.name);
    } else {
      // On desktop or products without variants, add directly to cart
      console.log('Adding to cart:', product.name, 'Quantity:', quantity);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                جديد
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
                الأكثر مبيعاً
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="text-xs">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Like Button */}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              className="w-full gradient-purple text-white hover:opacity-90"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <ShoppingCart className="h-4 w-4 ml-2" />
              أضف للسلة
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground">{product.category}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{product.price} د.ل</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice} د.ل
                </span>
              )}
            </div>
          </div>

          {/* Quantity Controls for Desktop */}
          {!isMobile && (
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity(Math.max(1, quantity - 1));
                  }}
                >
                  -
                </Button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
              >
                أضف
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
