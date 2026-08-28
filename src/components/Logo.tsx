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
  showEst = true,
  size = 'md',
  variant = 'full',
}) => {
  const sizeDimensions = {
    sm: { icon: 44, text: 'text-base' },
    md: { icon: 56, text: 'text-lg' },
    lg: { icon: 84, text: 'text-2xl' },
    xl: { icon: 120, text: 'text-3xl' },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full max-w-full max-h-full drop-shadow-xs"
          style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}
        >
          {/* Circular Frame */}
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke="#292727"
            strokeWidth="3.2"
            strokeDasharray="470 50"
            strokeDashoffset="-20"
          />

          {/* Curved Text along path: SIGNATUREONE NOTARY */}
          <defs>
            <path
              id="circlePathIcon"
              d="M 28,100 A 72,72 0 1,1 172,100"
              fill="none"
            />
            {/* Gradient for Feather Quill */}
            <linearGradient id="featherGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DCD9" />
              <stop offset="60%" stopColor="#E8C9C5" />
              <stop offset="100%" stopColor="#B9827B" />
            </linearGradient>
          </defs>

          <text fill="#292727" fontSize="13.5" fontWeight="600" letterSpacing="3.5">
            <textPath href="#circlePathIcon" startOffset="5%">
              SIGNATUREONE NOTARY
            </textPath>
          </text>

          {/* Script Text "Mobile" in Center */}
          <text
            x="96"
            y="118"
            textAnchor="middle"
            fill="#292727"
            fontFamily="'Alex Brush', 'Playfair Display', cursive"
            fontSize="48"
            fontStyle="italic"
            className="select-none"
          >
            Mobile
          </text>

          {/* Feather Quill Pen (Top-Right flourish) */}
          <g transform="translate(130, 20) rotate(22) scale(0.65)">
            {/* Feather Main Body */}
            <path
              d="M30,10 C45,25 55,50 50,75 C45,95 30,115 15,130 C22,105 32,70 20,40 C15,30 20,15 30,10 Z"
              fill="url(#featherGradIcon)"
              opacity="0.95"
            />
            {/* Feather Barbs Detail */}
            <path
              d="M30,10 C25,25 15,45 5,60 C12,55 22,48 26,38 M35,35 C42,42 48,55 45,68 C38,62 33,52 30,42 M38,60 C45,72 42,88 35,98 C32,88 32,75 28,66"
              stroke="#B9827B"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Feather Quill Stem / Nib */}
            <path
              d="M30,10 Q22,75 10,135 Q5,150 0,165"
              stroke="#B9827B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Nib Tip */}
            <polygon points="0,165 4,155 -2,157" fill="#292727" />
            {/* Swirl Ink flourish */}
            <path
              d="M0,165 C-10,175 -5,185 8,180 C18,175 15,160 3,158"
              stroke="#E8C9C5"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* est. 2016 */}
          <text
            x="100"
            y="172"
            textAnchor="middle"
            fill="#292727"
            fontSize="10"
            fontWeight="500"
            letterSpacing="1.5"
          >
            est. 2016
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="relative shrink-0" style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="#292727"
              strokeWidth="3.2"
              strokeDasharray="470 50"
              strokeDashoffset="-20"
            />
            <defs>
              <path id="circlePathH" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
              <linearGradient id="featherGradH" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5DCD9" />
                <stop offset="60%" stopColor="#E8C9C5" />
                <stop offset="100%" stopColor="#B9827B" />
              </linearGradient>
            </defs>
            <text fill="#292727" fontSize="13.5" fontWeight="600" letterSpacing="3.5">
              <textPath href="#circlePathH" startOffset="5%">
                SIGNATUREONE NOTARY
              </textPath>
            </text>
            <text
              x="96"
              y="118"
              textAnchor="middle"
              fill="#292727"
              fontFamily="'Alex Brush', 'Playfair Display', cursive"
              fontSize="48"
              fontStyle="italic"
            >
              Mobile
            </text>
            <g transform="translate(130, 20) rotate(22) scale(0.65)">
              <path
                d="M30,10 C45,25 55,50 50,75 C45,95 30,115 15,130 C22,105 32,70 20,40 C15,30 20,15 30,10 Z"
                fill="url(#featherGradH)"
              />
              <path
                d="M30,10 C25,25 15,45 5,60 C12,55 22,48 26,38 M35,35 C42,42 48,55 45,68 C38,62 33,52 30,42"
                stroke="#B9827B"
                strokeWidth="1.2"
                fill="none"
              />
              <path d="M30,10 Q22,75 10,135 Q5,150 0,165" stroke="#B9827B" strokeWidth="2" fill="none" />
              <polygon points="0,165 4,155 -2,157" fill="#292727" />
            </g>
            <text x="100" y="172" textAnchor="middle" fill="#292727" fontSize="10" fontWeight="500" letterSpacing="1.5">
              est. 2016
            </text>
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-serif font-semibold tracking-wide text-[#292727] text-lg sm:text-xl leading-tight">
            SignatureOne
          </span>
          <span className="text-xs uppercase tracking-widest text-[#786F6A] font-medium">
            Mobile Notary &amp; Loan Signing
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Central Circular Badge Logo */}
      <div className="relative inline-flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full max-w-full drop-shadow-xs"
          style={{ width: sizeDimensions.icon, height: sizeDimensions.icon }}
        >
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="#FFFFFF"
            stroke="#292727"
            strokeWidth="3.2"
            strokeDasharray="470 50"
            strokeDashoffset="-20"
          />

          <defs>
            <path id="circlePathFull" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
            <linearGradient id="featherGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9ECE9" />
              <stop offset="50%" stopColor="#E8C9C5" />
              <stop offset="100%" stopColor="#B9827B" />
            </linearGradient>
          </defs>

          {/* Curved Text along path: SIGNATUREONE NOTARY */}
          <text fill="#292727" fontSize="13.5" fontWeight="600" letterSpacing="3.5">
            <textPath href="#circlePathFull" startOffset="5%">
              SIGNATUREONE NOTARY
            </textPath>
          </text>

          {/* Script Text "Mobile" */}
          <text
            x="96"
            y="118"
            textAnchor="middle"
            fill="#292727"
            fontFamily="'Alex Brush', 'Playfair Display', cursive"
            fontSize="48"
            fontStyle="italic"
            className="select-none"
          >
            Mobile
          </text>

          {/* Feather Quill Pen (Top-Right flourish) */}
          <g transform="translate(130, 20) rotate(22) scale(0.65)">
            <path
              d="M30,10 C45,25 55,50 50,75 C45,95 30,115 15,130 C22,105 32,70 20,40 C15,30 20,15 30,10 Z"
              fill="url(#featherGradFull)"
            />
            <path
              d="M30,10 C25,25 15,45 5,60 C12,55 22,48 26,38 M35,35 C42,42 48,55 45,68 C38,62 33,52 30,42 M38,60 C45,72 42,88 35,98"
              stroke="#B9827B"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M30,10 Q22,75 10,135 Q5,150 0,165" stroke="#B9827B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <polygon points="0,165 4,155 -2,157" fill="#292727" />
            <path
              d="M0,165 C-10,175 -5,185 8,180 C18,175 15,160 3,158"
              stroke="#E8C9C5"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {showEst && (
            <text x="100" y="172" textAnchor="middle" fill="#292727" fontSize="10" fontWeight="500" letterSpacing="1.5">
              est. 2016
            </text>
          )}
        </svg>
      </div>

      {showSubtitle && (
        <div className="mt-2 text-center">
          <p className="text-xs uppercase tracking-widest text-[#786F6A] font-medium">
            Lavon, Texas 75166
          </p>
        </div>
      )}
    </div>
  );
};
