'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn, generateWhatsAppLink } from '@/lib/utils';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip after button appears (only once)
    if (isVisible && !hasShownTooltip) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        setHasShownTooltip(true);

        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 2000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible, hasShownTooltip]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-[250px] animate-in fade-in slide-in-from-right-5 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm text-gray-700 pr-4">
            Need help? Chat with us on WhatsApp for quick assistance!
          </p>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative flex items-center justify-center',
          'w-14 h-14 md:w-16 md:h-16',
          'bg-[#25D366] hover:bg-[#128C7E]',
          'rounded-full shadow-lg hover:shadow-xl',
          'transition-all duration-300',
          'animate-in fade-in zoom-in duration-500'
        )}
      >
        {/* Pulse Animation */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* Icon */}
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white relative z-10" />

        {/* Hover Label (Desktop only) */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}

export default WhatsAppButton;
