'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function CompanyBackground() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: true, delay: 100 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ triggerOnce: true, delay: 200 });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={cn(
              'scroll-slide-right',
              contentVisible && 'visible'
            )}
          >
            <span className="text-[#DC2626] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-6">
              Company Background
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                GIDS-MARTZ Industrial Suppliers was established in Zimbabwe in 1997 and has been operating since, 
                building a reputation as one of the country&apos;s most trusted suppliers of industrial electrical equipment.
              </p>
              
              <p className="text-base sm:text-lg">
                <strong className="text-[#1E3A8A]">Mr Gideon Muzhingi</strong> is the founder and Managing Director 
                and is an Electrical Engineer by profession and an innate Sales and Marketing Expert whose strong 
                technical background is a great contribution to efficient & effective service delivery that defines 
                our philosophy. He is a team player and leads to the total company effort of being customer-oriented.
              </p>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className={cn(
              'relative',
              'scroll-slide-left',
              imageVisible && 'visible'
            )}
          >
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop&auto=format"
                alt="Industrial electrical equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
