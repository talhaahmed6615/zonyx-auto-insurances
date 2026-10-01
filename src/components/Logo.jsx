import './Logo.css';

/**
 * Zonyx brand mark.
 *
 * Uses the official Zonyx Auto Insurance logo image (the full shield + wordmark
 * is baked into the PNG). The `showText` prop is kept for API compatibility but
 * the image itself contains the complete brand lockup.
 *
 *  - `size`      controls the height of the logo in px
 *  - `showText`  when true, renders the full lockup (wider); when false, shows
 *                just the shield mark cropped from the image
 *  - `onDark`    kept for API compatibility (image works on both backgrounds)
 */
const Logo = ({ className = '', size = 40, showText = true, onDark = false, isNavbar = false }) => {
  return (
    <div
      className={`zonyx-logo ${showText ? 'zonyx-logo--full' : 'zonyx-logo--mark-only'} ${onDark ? 'zonyx-logo--on-dark' : ''} ${className}`}
      style={{ '--logo-size': `${size}px` }}
    >
      <img
        src={isNavbar ? "/images/zonyx-logo-transparent.png" : "/images/zonyx-logo.png"}
        alt="Zonyx Auto Insurance"
        className="zonyx-logo__img"
      />
    </div>
  );
};

export default Logo;
