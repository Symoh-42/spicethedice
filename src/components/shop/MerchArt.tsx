import Image from "next/image";
import type { MerchColor, MerchKind } from "@/lib/merch";
import { cn } from "@/lib/utils";

// Illustrated product mock-ups. Used until real product photography is
// supplied via `MerchProduct.image`.
function Dice({ x, y, size, ink }: { x: number; y: number; size: number; ink: string }) {
  const r = size * 0.09;
  const o = size * 0.27;
  const c = size / 2;
  return (
    <g transform={`translate(${x - c} ${y - c})`}>
      <rect width={size} height={size} rx={size * 0.18} fill="none" stroke={ink} strokeWidth={size * 0.07} />
      {[
        [c - o, c - o],
        [c + o, c - o],
        [c, c],
        [c - o, c + o],
        [c + o, c + o],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={ink} />
      ))}
    </g>
  );
}

function Logo({ x, y, scale = 1, ink }: { x: number; y: number; scale?: number; ink: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <Dice x={0} y={-16} size={22} ink={ink} />
      <text
        x={0}
        y={14}
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight={700}
        fontSize={15}
        letterSpacing={2}
        fill={ink}
      >
        SPICE DICE
      </text>
    </g>
  );
}

function shade(hex: string) {
  // Darkened tone of the garment colour for seams and shadows.
  return `color-mix(in srgb, ${hex} 78%, #000)`;
}

export default function MerchArt({
  kind,
  color,
  image,
  alt,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
}: {
  kind: MerchKind;
  color: MerchColor;
  image?: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  if (image) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden bg-charcoal", className)}>
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  const dark = shade(color.hex);

  return (
    <div
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal", className)}
      style={{
        background:
          "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(239,35,60,0.16), transparent 70%), #111",
      }}
    >
      <svg viewBox="0 0 300 300" role="img" aria-label={alt} className="h-[78%] w-[78%] drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)]">
        {kind === "tshirt" && (
          <g>
            <path
              d="M105 40 L75 52 L30 92 L58 128 L82 112 L82 262 L218 262 L218 112 L242 128 L270 92 L225 52 L195 40 Q150 72 105 40 Z"
              fill={color.hex}
              stroke={dark}
              strokeWidth={3}
              strokeLinejoin="round"
            />
            <path d="M105 40 Q150 72 195 40" fill="none" stroke={dark} strokeWidth={6} />
            <Logo x={150} y={150} scale={1.6} ink={color.ink} />
          </g>
        )}

        {kind === "cap" && (
          <g>
            <path d="M60 175 Q60 80 150 78 Q240 80 240 175 Z" fill={color.hex} stroke={dark} strokeWidth={3} />
            <path d="M150 78 L150 175" stroke={dark} strokeWidth={2} opacity={0.6} />
            <path d="M105 88 Q118 130 112 175" fill="none" stroke={dark} strokeWidth={2} opacity={0.5} />
            <path d="M195 88 Q182 130 188 175" fill="none" stroke={dark} strokeWidth={2} opacity={0.5} />
            <circle cx={150} cy={80} r={6} fill={dark} />
            <path d="M52 175 Q150 160 248 175 Q262 200 210 214 Q150 226 90 214 Q38 200 52 175 Z" fill={dark} />
            <Logo x={150} y={142} scale={1.05} ink={color.ink} />
          </g>
        )}

        {kind === "thermos" && (
          <g>
            <rect x={118} y={30} width={64} height={30} rx={8} fill={dark} />
            <rect x={110} y={56} width={80} height={14} rx={4} fill={dark} />
            <rect x={104} y={68} width={92} height={204} rx={22} fill={color.hex} stroke={dark} strokeWidth={3} />
            <rect x={116} y={80} width={10} height={180} rx={5} fill="#fff" opacity={0.12} />
            <Logo x={150} y={176} scale={0.95} ink={color.ink} />
          </g>
        )}
      </svg>
    </div>
  );
}
