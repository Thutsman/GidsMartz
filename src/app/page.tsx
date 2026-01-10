import {
  HeroSlider,
  TrustBadges,
  FeaturedCategories,
  FeaturedProducts,
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
