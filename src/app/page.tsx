import {
  HeroSlider,
  TrustBadges,
  FeaturedCategories,
  FeaturedProducts,
  ProductGallery,
  FeaturedProject,
  DiasporaSection,
  WhyChooseUs,
  BrandsWeCarry,
  Testimonials,
  CTASection
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Trust Badges Strip */}
      <TrustBadges />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Featured Project */}
      <FeaturedProject />

      {/* Product Gallery */}
      <ProductGallery />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Diaspora Section */}
      <DiasporaSection />

      {/* Brands We Carry */}
      <BrandsWeCarry />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
