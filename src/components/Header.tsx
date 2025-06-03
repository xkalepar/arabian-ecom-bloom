
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/hooks/useCart';

export function Header() {
  const navigate = useNavigate();
  const { getTotalItems, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">إ</span>
            </div>
            <span className="text-xl font-bold text-gradient">متجر إبتكار</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن المنتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 pl-4"
              />
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -left-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-3 border-t">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            الرئيسية
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            جميع المنتجات
          </Link>
          <button 
            onClick={() => navigate('/products')} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            إلكترونيات
          </button>
          <button 
            onClick={() => navigate('/products')} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            ملابس رجالية
          </button>
          <button 
            onClick={() => navigate('/products')} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            ملابس نسائية
          </button>
          <button 
            onClick={() => navigate('/products')} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            المنزل والحديقة
          </button>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            عن المتجر
          </Link>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث عن المنتجات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 pl-4"
            />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-2 animate-fade-in">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/products" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              جميع المنتجات
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              عن المتجر
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              اتصل بنا
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Link to="/orders" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                طلباتي
              </Link>
              <button 
                onClick={openCart}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors w-full text-right"
              >
                سلة التسوق ({getTotalItems()})
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
