import { Metadata } from 'next';
import { DiasporaPageContent } from '@/components/diaspora/DiasporaPageContent';

export const metadata: Metadata = {
  title: 'Diaspora Program | Building Your Dream Home in Zimbabwe',
  description: 'GIDS-MARTZ helps Zimbabweans in the diaspora build back home with quality materials, professional project management, and transparent pricing in USD, GBP, EUR & more.',
  keywords: 'zimbabwe diaspora building, build from abroad zimbabwe, electrical materials zimbabwe, diaspora construction, bulawayo builders, harare construction materials',
};

export default function DiasporaPage() {
  return <DiasporaPageContent />;
}
