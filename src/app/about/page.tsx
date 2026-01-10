import { AboutHero } from '@/components/about/AboutHero';
import { CompanyBackground } from '@/components/about/CompanyBackground';
import { ScopeOfBusiness } from '@/components/about/ScopeOfBusiness';
import { CompetitiveAdvantages } from '@/components/about/CompetitiveAdvantages';
import { OurClients } from '@/components/about/OurClients';
import { OurOffices } from '@/components/about/OurOffices';
import { CompanyStats } from '@/components/about/CompanyStats';
import { TrustedBrands } from '@/components/about/TrustedBrands';

export const metadata = {
  title: 'About Us',
  description: 'Learn about GIDS-MARTZ Industrial Suppliers - Zimbabwe\'s trusted supplier of industrial electrical equipment since 1997. Founded by Electrical Engineer Gideon Muzhingi.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyBackground />
      <ScopeOfBusiness />
      <CompetitiveAdvantages />
      <OurClients />
      <TrustedBrands />
      <CompanyStats />
      <OurOffices />
    </>
  );
}
