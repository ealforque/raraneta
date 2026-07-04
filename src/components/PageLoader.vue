<template>
  <div class="page-loader" role="status" aria-live="polite" aria-label="Loading page">
    <div class="loader-grid" aria-hidden="true"></div>
    <div class="protractor-wrap" aria-hidden="true">
      <svg class="protractor" viewBox="0 0 320 220">
        <path class="arc arc-outer" d="M30 190 A130 130 0 0 1 290 190" />
        <path class="arc arc-inner" d="M58 190 A102 102 0 0 1 262 190" />
        <path class="arc arc-sweep" d="M30 190 A130 130 0 0 1 290 190" />

        <g class="ticks">
          <line x1="30" y1="190" x2="48" y2="190" />
          <line x1="40" y1="139" x2="56" y2="146" />
          <line x1="69" y1="94" x2="83" y2="104" />
          <line x1="112" y1="60" x2="122" y2="74" />
          <line x1="160" y1="48" x2="160" y2="66" />
          <line x1="208" y1="60" x2="198" y2="74" />
          <line x1="251" y1="94" x2="237" y2="104" />
          <line x1="280" y1="139" x2="264" y2="146" />
          <line x1="290" y1="190" x2="272" y2="190" />
        </g>

        <g class="degree-labels">
          <text x="28" y="206">0</text>
          <text x="86" y="87">45</text>
          <text x="152" y="40">90</text>
          <text x="224" y="87">135</text>
          <text x="266" y="206">180</text>
        </g>

        <g class="needle-group">
          <line class="needle" x1="160" y1="190" x2="74" y2="102" />
          <circle class="needle-hub" cx="160" cy="190" r="8" />
        </g>
      </svg>
      <div class="pulse-ring"></div>
    </div>

    <p class="loader-brand">RAMIR STUDIO</p>
    <p class="loader-copy">Designing the next urban landmark</p>
  </div>
</template>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-content: center;
  gap: 0.55rem;
  background: radial-gradient(circle at 32% 20%, rgba(189, 169, 138, 0.15), transparent 40%), #0a0b0a;
  text-align: center;
}

.loader-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at center, black 24%, transparent 72%);
}

.loader-brand {
  margin: 0;
  letter-spacing: 0.24em;
  font-size: 0.82rem;
  color: var(--text);
}

.loader-copy {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.68rem;
}

.protractor-wrap {
  width: min(340px, 82vw);
  margin: 0 auto 0.35rem;
  position: relative;
}

.protractor {
  width: 100%;
  display: block;
  filter: drop-shadow(0 16px 30px rgba(0, 0, 0, 0.32));
}

.arc {
  fill: none;
  stroke-linecap: round;
}

.arc-outer {
  stroke: rgba(236, 229, 216, 0.35);
  stroke-width: 1.4;
}

.arc-inner {
  stroke: rgba(189, 169, 138, 0.28);
  stroke-width: 1.1;
}

.arc-sweep {
  stroke: rgba(189, 169, 138, 0.95);
  stroke-width: 2.1;
  stroke-dasharray: 44 380;
  animation: sweepArc 1.5s ease-in-out infinite;
}

.ticks line {
  stroke: rgba(233, 227, 214, 0.62);
  stroke-width: 1.4;
}

.degree-labels text {
  fill: rgba(216, 207, 190, 0.78);
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  letter-spacing: 0.08em;
}

.needle-group {
  transform-origin: 160px 190px;
  animation: needleSweep 1.6s var(--ease-premium) infinite alternate;
}

.needle {
  stroke: rgba(189, 169, 138, 0.98);
  stroke-width: 2.2;
  filter: drop-shadow(0 0 8px rgba(189, 169, 138, 0.58));
}

.needle-hub {
  fill: #111210;
  stroke: rgba(189, 169, 138, 0.92);
  stroke-width: 2;
}

.pulse-ring {
  position: absolute;
  width: 22px;
  aspect-ratio: 1;
  border-radius: 50%;
  left: 50%;
  bottom: 23px;
  transform: translateX(-50%);
  border: 1px solid rgba(189, 169, 138, 0.55);
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes needleSweep {
  0% {
    transform: rotate(-70deg);
  }

  100% {
    transform: rotate(70deg);
  }
}

@keyframes sweepArc {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -210;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: translateX(-50%) scale(1);
  }

  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.3);
  }
}
</style>
