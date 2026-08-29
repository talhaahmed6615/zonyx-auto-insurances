import { useId } from 'react';
import './Logo.css';

/**
 * Zonyx brand mark.
 *
 * Geometry is authored once here and re-used by public/favicon.svg so the
 * tab icon and the on-page logo are the same artwork.
 *
 *  - `size`      width of the shield in px (height is 1.25x)
 *  - `showText`  render the ZONYX / AUTO INSURANCE wordmark beside the shield
 *  - `stacked`   place the wordmark under the shield instead of beside it
 */
const Logo = ({ className = '', size = 48, showText = true, stacked = false }) => {
  // useId keeps gradient ids unique — the logo renders in the header, hero and
  // footer at once, and duplicate SVG ids make every instance share one paint.
  const uid = useId().replace(/:/g, '');
  const gold = `gold-${uid}`;
  const goldSoft = `goldSoft-${uid}`;
  const field = `field-${uid}`;

  return (
    <div
      className={`zonyx-logo ${stacked ? 'is-stacked' : ''} ${className}`}
      style={{ '--logo-size': `${size}px` }}
    >
      <div className="zonyx-logo__mark">
        <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zonyx">
          <defs>
            {/* The signature gold: deep bronze -> pale highlight -> bronze again */}
            <linearGradient id={gold} x1="12" y1="6" x2="108" y2="144" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8C6318" />
              <stop offset="0.18" stopColor="#D9A93C" />
              <stop offset="0.34" stopColor="#FDF6C0" />
              <stop offset="0.5" stopColor="#C08F2B" />
              <stop offset="0.68" stopColor="#FBF3B4" />
              <stop offset="0.85" stopColor="#C69430" />
              <stop offset="1" stopColor="#8A6015" />
            </linearGradient>

            <linearGradient id={goldSoft} x1="20" y1="18" x2="100" y2="128" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E7C25F" />
              <stop offset="0.5" stopColor="#FDF6C0" />
              <stop offset="1" stopColor="#B0801F" />
            </linearGradient>

            {/* Navy shield field, lighter at the crown */}
            <linearGradient id={field} x1="60" y1="15" x2="60" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#16224A" />
              <stop offset="0.55" stopColor="#0C1330" />
              <stop offset="1" stopColor="#05081A" />
            </linearGradient>
          </defs>

          {/* Outer gold shield */}
          <path
            className="zonyx-logo__shield"
            d="M14 8 H106 A6 6 0 0 1 112 14 V72 C112 106 88 130 60 142 C32 130 8 106 8 72 V14 A6 6 0 0 1 14 8 Z"
            fill={`url(#${gold})`}
          />

          {/* Navy field inset inside the gold band */}
          <path
            d="M20 15 H100 A4 4 0 0 1 104 19 V71 C104 100 84 121 60 132 C36 121 16 100 16 71 V19 A4 4 0 0 1 20 15 Z"
            fill={`url(#${field})`}
          />

          {/* Facet: the left half of the field sits a shade darker */}
          <path
            d="M20 15 H60 V132 C36 121 16 100 16 71 V19 A4 4 0 0 1 20 15 Z"
            fill="#000000"
            fillOpacity="0.22"
          />

          {/* Thin gold keyline tracing the field */}
          <path
            d="M23.5 19.5 H96.5 A3 3 0 0 1 99.5 22.5 V70.5 C99.5 96 81 115 60 125 C39 115 20.5 96 20.5 70.5 V22.5 A3 3 0 0 1 23.5 19.5 Z"
            fill="none"
            stroke={`url(#${goldSoft})`}
            strokeWidth="1.6"
          />

          {/* Serif Z */}
          <path
            className="zonyx-logo__z"
            d="M32 40 H88 V50 L52 88 H88 V100 H32 V90 L68 52 H32 Z"
            fill={`url(#${gold})`}
          />
        </svg>
      </div>

      {showText && (
        <div className="zonyx-logo__text">
          <span className="zonyx-logo__word">ZONYX</span>
          <span className="zonyx-logo__tagline">
            <i className="zonyx-logo__rule" aria-hidden="true" />
            AUTO INSURANCE
            <i className="zonyx-logo__rule" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
