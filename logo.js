/* NightSCRY eye logo — recreated as inline SVG in the style of the brand mark:
   silver angular brow chevron, almond eyelid, glowing purple reptilian iris w/ slit pupil. */
window.NightSCRYLogo = function (id) {
  return `
<svg viewBox="0 0 200 200" class="ns-eye" role="img" aria-label="NightSCRY eye" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ns-silver-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.5" stop-color="#cfd2da"/>
      <stop offset="1" stop-color="#8b8f9c"/>
    </linearGradient>
    <radialGradient id="ns-iris-${id}" cx="50%" cy="42%" r="62%">
      <stop offset="0" stop-color="#c9a9ff"/>
      <stop offset="0.35" stop-color="#8b5cf6"/>
      <stop offset="0.7" stop-color="#5b21b6"/>
      <stop offset="1" stop-color="#2a0e5a"/>
    </radialGradient>
    <radialGradient id="ns-core-${id}" cx="50%" cy="58%" r="55%">
      <stop offset="0" stop-color="#e9d5ff"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <filter id="ns-glow-${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="ns-clip-${id}">
      <path d="M28 100 C60 60 140 60 172 100 C140 140 60 140 28 100 Z"/>
    </clipPath>
  </defs>

  <!-- brow chevron -->
  <path d="M40 78 L100 40 L160 78 L154 86 L100 54 L46 86 Z" fill="url(#ns-silver-${id})"/>

  <!-- iris + pupil (clipped to eye almond) -->
  <g clip-path="url(#ns-clip-${id})">
    <g class="ns-look">
      <g class="ns-blink">
        <circle cx="100" cy="100" r="42" fill="url(#ns-iris-${id})"/>
        <circle cx="100" cy="104" r="34" fill="url(#ns-core-${id})"/>
        <g filter="url(#ns-glow-${id})">
          <path class="ns-pupil" d="M100 74 C108 88 108 112 100 126 C92 112 92 88 100 74 Z" fill="#1a0633"/>
          <!-- easter egg: mini cross of Jesus, hidden inside the pupil -->
          <g class="ns-cross" fill="#f5e6c8" stroke="#f5e6c8" stroke-width="0.6">
            <rect x="98.6" y="86" width="2.8" height="28" rx="1"/>
            <rect x="93" y="93.5" width="14" height="2.8" rx="1"/>
          </g>
        </g>
      </g>
    </g>
    <!-- blink lid: background-coloured almond that sweeps down from the brow -->
    <path class="ns-lid" d="M28 100 C60 60 140 60 172 100 C140 140 60 140 28 100 Z" fill="#040309"/>
  </g>

  <!-- eyelid almond outline -->
  <path d="M28 100 C60 60 140 60 172 100 C140 140 60 140 28 100 Z"
        fill="none" stroke="url(#ns-silver-${id})" stroke-width="6" stroke-linejoin="round"/>
</svg>`;
};
