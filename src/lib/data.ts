
export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categoryEn: string;
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  nameEn: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "إلكترونيات",
    nameEn: "Electronics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    productCount: 156
  },
  {
    id: 2,
    name: "ملابس رجالية",
    nameEn: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    productCount: 89
  },
  {
    id: 3,
    name: "ملابس نسائية",
    nameEn: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    productCount: 203
  },
  {
    id: 4,
    name: "المنزل والحديقة",
    nameEn: "Home & Garden",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    productCount: 67
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "لابتوب جيمنج عالي الأداء",
    nameEn: "High Performance Gaming Laptop",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    ],
    category: "إلكترونيات",
    categoryEn: "Electronics",
    description: "لابتوب جيمنج متطور بمعالج قوي وكارت جرافيك عالي الأداء مثالي للألعاب والعمل الاحترافي",
    features: [
      "معالج Intel Core i7 الجيل الثاني عشر",
      "ذاكرة عشوائية 16 جيجابايت DDR4",
      "قرص صلب SSD بسعة 512 جيجابايت",
      "كارت جرافيك NVIDIA RTX 3060",
      "شاشة 15.6 بوصة Full HD"
    ],
    colors: ["أسود", "رمادي"],
    sizes: [],
    rating: 4.8,
    reviews: 142,
    inStock: true,
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "قميص قطني كلاسيكي",
    nameEn: "Classic Cotton Shirt",
    price: 49,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
    ],
    category: "ملابس رجالية",
    categoryEn: "Men's Fashion",
    description: "قميص رجالي كلاسيكي من القطن الخالص بتصميم أنيق مناسب للعمل والمناسبات",
    features: [
      "قطن خالص 100%",
      "تصميم كلاسيكي أنيق",
      "مناسب للغسيل في الغسالة",
      "متوفر بألوان متعددة"
    ],
    colors: ["أبيض", "أزرق", "رمادي"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 89,
    inStock: true,
    isNew: true
  },
  {
    id: 3,
    name: "فستان صيفي أنيق",
    nameEn: "Elegant Summer Dress",
    price: 89,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80"
    ],
    category: "ملابس نسائية",
    categoryEn: "Women's Fashion",
    description: "فستان صيفي جميل بتصميم عصري مريح ومناسب للمناسبات اليومية والاجتماعية",
    features: [
      "قماش خفيف ومريح",
      "تصميم عصري وأنيق",
      "مناسب للصيف",
      "سهل العناية والغسيل"
    ],
    colors: ["أحمر", "أزرق", "أسود"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isFeatured: true
  },
  {
    id: 4,
    name: "طقم أريكة مودرن",
    nameEn: "Modern Sofa Set",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
    ],
    category: "المنزل والحديقة",
    categoryEn: "Home & Garden",
    description: "طقم أريكة مودرن مريح وأنيق يضفي لمسة عصرية على غرفة المعيشة",
    features: [
      "تصميم مودرن وعصري",
      "خامات عالية الجودة",
      "مريح وعملي",
      "سهل التنظيف"
    ],
    colors: ["رمادي", "بيج", "أسود"],
    sizes: [],
    rating: 4.6,
    reviews: 73,
    inStock: true,
    isBestSeller: true
  },
  {
    id: 5,
    name: "هاتف ذكي متطور",
    nameEn: "Advanced Smartphone",
    price: 699,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    ],
    category: "إلكترونيات",
    categoryEn: "Electronics",
    description: "هاتف ذكي متطور بكاميرا عالية الدقة ومعالج سريع وبطارية طويلة المدى",
    features: [
      "شاشة 6.7 بوصة AMOLED",
      "كاميرا 108 ميجابكسل",
      "معالج Snapdragon 8 Gen 2",
      "ذاكرة 256 جيجابايت",
      "بطارية 5000 mAh"
    ],
    colors: ["أسود", "أبيض", "أزرق"],
    sizes: [],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 6,
    name: "جاكيت جينز كلاسيكي",
    nameEn: "Classic Denim Jacket",
    price: 79,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
    ],
    category: "ملابس رجالية",
    categoryEn: "Men's Fashion",
    description: "جاكيت جينز كلاسيكي بتصميم عصري مناسب لجميع المواسم والمناسبات",
    features: [
      "قماش جينز عالي الجودة",
      "تصميم كلاسيكي خالد",
      "جيوب متعددة عملية",
      "مناسب لجميع المواسم"
    ],
    colors: ["أزرق", "أسود", "رمادي"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 67,
    inStock: true
  }
];

export const getBestSellers = () => products.filter(product => product.isBestSeller);
export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getNewProducts = () => products.filter(product => product.isNew);
