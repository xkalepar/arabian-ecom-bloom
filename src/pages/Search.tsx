
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(products);

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
    
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(products);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">البحث</h1>
          
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
            <div className="relative flex-1">
              <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن المنتجات..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Button type="submit">بحث</Button>
          </form>
        </div>

        {searchParams.get('q') && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              نتائج البحث عن "{searchParams.get('q')}" - {results.length} منتج
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : searchParams.get('q') ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-muted-foreground mb-4">جرب كلمات مفتاحية أخرى</p>
            <Button onClick={() => setSearchParams({})}>
              عرض جميع المنتجات
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
