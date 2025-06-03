
import { useState } from 'react';
import { Search, ShoppingCart, Menu, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b">
          <div className="hidden md:block">
            <span>📞 +218928666458 | ✉️ contact@ebtkar.tech</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="hidden md:inline">توصيل مجاني للطلبات فوق 100 د.ل</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">إ</span>
            </div>
            <span className="text-xl font-bold text-gradient">متجر إبتكار</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن المنتجات..."
                className="pr-10 pl-4"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -left-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-3 border-t">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            الرئيسية
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            إلكترونيات
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            ملابس رجالية
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            ملابس نسائية
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            المنزل والحديقة
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            عروض خاصة
          </a>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث عن المنتجات..."
              className="pr-10 pl-4"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-2 animate-fade-in">
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              إلكترونيات
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              ملابس رجالية
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              ملابس نسائية
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              المنزل والحديقة
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              عروض خاصة
            </a>
            <div className="pt-4 border-t space-y-2">
              <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                حسابي
              </a>
              <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                المفضلة
              </a>
              <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                طلباتي
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
