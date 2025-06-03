
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: 'grid' | 'list';
}

export function ProductCard({ product, index = 0, variant = 'grid' }: ProductCardProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const isMobile = useIsMobile();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile && (product.colors.length > 0 || product.sizes.length > 0)) {
      // On mobile, navigate to product page for selection
      navigate(`/product/${product.id}`);
    } else {
      // On desktop or products without variants, add directly to cart
      addItem(product, quantity, product.colors[0], product.sizes[0]);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  if (variant === 'list') {
    return (
      <Card 
        className="cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div className="flex gap-4 p-4">
            {/* Image */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              
              {/* Badges */}
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                {product.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                    جديد
                  </Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    -{discountPercentage}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
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
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{product.price} د.ل</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice} د.ل
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2">
                <Button
                  className="gradient-purple text-white hover:opacity-90"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  أضف للسلة
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid view (default)
  return (
    <Card 
      className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleCardClick}
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
              onClick={handleAddToCart}
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
                onClick={handleAddToCart}
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
