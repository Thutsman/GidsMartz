'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  linkToHome?: boolean;
}

export function Logo({
  size = 'md',
  showTagline = false,
  className,
  linkToHome = true
}: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'gap-0.5',
      title: 'text-lg',
      subtitle: 'text-[8px]',
      line: 'h-0.5',
      tagline: 'text-[6px]'
    },
    md: {
      container: 'gap-1',
      title: 'text-2xl',
      subtitle: 'text-[10px]',
      line: 'h-1',
      tagline: 'text-[8px]'
    },
    lg: {
      container: 'gap-1.5',
      title: 'text-4xl',
      subtitle: 'text-sm',
      line: 'h-1.5',
      tagline: 'text-xs'
    }
  };

  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <div className={cn('flex flex-col', sizes.container, className)}>
      {/* Main Logo Text */}
      <div className="flex items-center">
        {/* Red and Blue stripes */}
        <div className="flex flex-col mr-2">
          <div className={cn('w-8 bg-[#DC2626]', sizes.line)} />
          <div className={cn('w-8 bg-white', sizes.line)} />
          <div className={cn('w-8 bg-[#1E3A8A]', sizes.line)} />
        </div>

        {/* Company Name */}
        <div>
          <span className={cn('font-bold text-[#1E3A8A]', sizes.title)}>
            GIDS
          </span>
          <span className={cn('font-bold text-[#1E3A8A]', sizes.title)}>
            -MARTZ
          </span>
        </div>
      </div>

      {/* Red underline */}
      <div className={cn('w-full bg-[#DC2626]', sizes.line)} />

      {/* Subtitle */}
      <span className={cn('font-semibold text-[#1E3A8A] tracking-wider uppercase', sizes.subtitle)}>
        Industrial Suppliers (Pvt) Ltd
      </span>

      {/* Tagline */}
      {showTagline && (
        <span className={cn('text-gray-600 tracking-wide', sizes.tagline)}>
          Quality | Efficiency | Professionalism
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

// Simple text logo for header
export function LogoSimple({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2 hover:opacity-90 transition-opacity', className)}>
      {/* Stripes */}
      <div className="flex flex-col">
        <div className="w-6 h-1 bg-[#DC2626]" />
        <div className="w-6 h-1 bg-white" />
        <div className="w-6 h-1 bg-[#1E3A8A]" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-[#1E3A8A] leading-tight">
          GIDS-MARTZ
        </span>
        <span className="text-[8px] font-semibold text-[#1E3A8A] tracking-wider uppercase leading-tight">
          Industrial Suppliers
        </span>
      </div>
    </Link>
  );
}

export default Logo;
