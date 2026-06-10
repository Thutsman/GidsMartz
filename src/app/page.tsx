import {
  HeroSlider,
  TrustBadges,
  FeaturedCategories,
  FeaturedProducts,
  ProductGallery,
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

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Product Gallery */}
      <ProductGallery />

      {/* Why Choose Us */}
      <WhyChooseUs />

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
