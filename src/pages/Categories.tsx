import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid3X3, ArrowRight } from 'lucide-react';
import { RootState } from '@/store/store';
import { setProducts, setSelectedCategory } from '@/store/slices/productSlice';
import { dummyProducts, categories } from '@/data/dummyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBanner from '@/assets/hero-banner.jpg';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(setProducts(dummyProducts));
    }
  }, [dispatch, products.length]);

  const getCategoryData = (categoryName: string) => {
    const categoryProducts = products.filter(p => p.category === categoryName);
    return {
      name: categoryName,
      count: categoryProducts.length,
      image: heroBanner, // In a real app, you'd have specific category images
      products: categoryProducts,
      averagePrice: categoryProducts.length > 0 
        ? Math.round(categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length)
        : 0,
    };
  };

  const categoryData = categories.map(getCategoryData);

  const handleCategoryClick = (categoryName: string) => {
    dispatch(setSelectedCategory(categoryName));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
              <Grid3X3 className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated furniture collections for every room in your home. 
            Find the perfect pieces to transform your living space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categoryData.map((category) => (
            <Card key={category.name} className="group hover:shadow-large transition-smooth overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Category Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">{category.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm opacity-90">{category.count} items</p>
                      {category.averagePrice > 0 && (
                        <p className="text-sm opacity-90">From ${category.averagePrice}</p>
                      )}
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      New Collection
                    </Badge>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">{category.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      Premium furniture collection
                    </p>
                  </div>
                  <Link to="/products" onClick={() => handleCategoryClick(category.name)}>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Shop Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="text-center">
          <Card className="gradient-hero text-primary-foreground overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Browse our complete collection or contact our design experts for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button variant="secondary" size="lg">
                    View All Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;