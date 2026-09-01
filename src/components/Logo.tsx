import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  showEst?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
  variant = 'full',
}) => {
  const sizeDimensions = {
    sm: { icon: 40, px: 'w-10 h-10', text: 'text-base' },
    md: { icon: 52, px: 'w-13 h-13', text: 'text-lg' },
    lg: { icon: 76, px: 'w-20 h-20', text: 'text-2xl' },
    xl: { icon: 110, px: 'w-28 h-28', text: 'text-3xl' },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/SONotaryLogo.png"
          alt="SignatureOne Notary Seal"
          className="object-contain rounded-full shadow-2xs"
          style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}
          onError={(e) => {
            // If image fails, fallback to styled representation
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative shrink-0" style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}>
          <img
            src="/SONotaryLogo.png"
            alt="SignatureOne Notary Seal"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-serif font-bold tracking-wide text-[#18181B] text-lg sm:text-xl leading-tight">
            SignatureOne
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#71717A] font-medium">
            Mobile Notary &amp; Loan Signing
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="relative inline-flex items-center justify-center">
        <img
          src="/SONotaryLogo.png"
          alt="SignatureOne Notary Seal"
          className="object-contain rounded-full"
          style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}
        />
      </div>

      {showSubtitle && (
        <div className="mt-2 text-center">
          <p className="text-xs uppercase tracking-widest text-[#71717A] font-medium">
            Lavon, Texas 75166
          </p>
        </div>
      )}
    </div>
  );
};
