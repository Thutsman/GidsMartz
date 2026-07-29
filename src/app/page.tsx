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

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Product Gallery */}
      <ProductGallery />

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
