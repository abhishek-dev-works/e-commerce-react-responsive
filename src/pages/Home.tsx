import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, Star, TrendingUp, Shield, Truck } from 'lucide-react';
import { RootState } from '@/store/store';
import { setProducts } from '@/store/slices/productSlice';
import { dummyProducts } from '@/data/dummyData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/Product/ProductCard';
import heroBanner from '@/assets/hero-banner.jpg';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(setProducts(dummyProducts));
  }, [dispatch]);

  const featuredProducts = products.slice(0, 3);
  const categories = [
    { name: 'Living Room', count: 15, image: heroBanner },
    { name: 'Bedroom', count: 12, image: heroBanner },
    { name: 'Dining Room', count: 8, image: heroBanner },
    { name: 'Office', count: 6, image: heroBanner },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Modern furniture"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Transform Your Space with 
              <span className="text-accent-soft"> Premium Furniture</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover our curated collection of modern, comfortable, and stylish furniture 
              that brings elegance to every corner of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">Free shipping on orders over $500</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">Premium materials and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">4.8/5 average customer rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated furniture collections for every room in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}>
                <Card className="group hover:shadow-medium transition-smooth overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-heading font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count} items</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked favorites that our customers love
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="hidden md:flex">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/products">
              <Button variant="outline">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Stay Updated with Our Latest Collections
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Be the first to know about new arrivals, exclusive offers, and design inspiration
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;